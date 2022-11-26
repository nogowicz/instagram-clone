import {
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Pressable,

} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import BottomNavigation from '../components/BottomNavigation';
import Header from '../components/Header';
import Post from '../components/Post';
import Stories from '../components/Stories';

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

const HomeScreen = ({ navigation }: Props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView>
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

            </ScrollView>
            <BottomNavigation />
        </SafeAreaView>
    );
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
});