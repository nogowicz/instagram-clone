import {
    View,
    SafeAreaView,
    Animated,
    StyleSheet,
    Pressable,
    RefreshControl,

} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import BottomNavigation from '../components/BottomNavigation';
import Header from '../components/Header';
import Post from '../components/Post';
import Stories from '../components/Stories';
import { useState, useCallback } from 'react';

import { posts } from '../data/posts';



type RootStackParamList = {
    HomeScreen: undefined;
};


type ProfileScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'HomeScreen'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};

const wait = (timeout: any) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const HomeScreen = ({ navigation }: Props) => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                pinchGestureEnabled={false}


            >
                <Stories />
                {posts.map((post, index) => (
                    <Post
                        key={index}
                        nick={post.user}
                        description={post.caption}
                        profilePicture={post.profilePicture}
                        imageUrl={post.imageURL}
                        locationTag={post.locationTag}
                        likes={post.likes}
                        time={post.time}
                        isStory={post.isStory}
                        comments={post.comments}
                    />
                ))}

            </Animated.ScrollView>
            <BottomNavigation />
        </SafeAreaView >
    );
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
});