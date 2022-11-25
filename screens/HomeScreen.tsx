import {
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet,

} from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';
import Stories from '../components/Stories';

import { posts } from '../data/posts';

const HomeScreen = () => {
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