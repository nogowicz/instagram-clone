import {
    StyleSheet,
    View,
    Pressable,
    Text,
    Image,
    Dimensions,

} from "react-native";
import {
    Entypo,
    AntDesign,
    FontAwesome5,
    Feather,
    Ionicons,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";



type postProps = {
    nick: string;
    description: string;
    profilePicture: string;
    imageUrl: string;
    locationTag: string;
    likes: number;
    time: string;
    isStory: boolean;
    comments: any;
};
const { width } = Dimensions.get("window")

const aspectRatio = 750 / 1126
const height = width * aspectRatio

const Post = (props: postProps) => {

    const {
        nick,
        profilePicture,
        imageUrl,
        description,
        locationTag,
        likes,
        time,
        isStory,
        comments,
    } = props;

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const [bookmarkPressed, setBookmarkPressed] = useState(false);
    const [likePressed, setLikePressed] = useState(false);

    let like = likes;
    if (likePressed) {
        like++;
    } else {
        like;
    }
    const toggleBookmark = () => {
        bookmarkPressed === false ? setBookmarkPressed(true) : setBookmarkPressed(false)
    }
    const toggleLike = () => {
        likePressed === false ? setLikePressed(true) : setLikePressed(false);
    }

    return (
        <View style={styles.container} >
            <View style={styles.topBar}>
                <View style={styles.topBarLeftSide}>
                    {isStory ?
                        <Pressable
                            style={styles.story}
                        >
                            <Pressable
                                style={({ pressed }) => [
                                    pressed && {
                                        transform: [{
                                            scale: 0.94,

                                        }],

                                    }
                                ]}>
                                <LinearGradient
                                    colors={['#CA1D7E', '#E35157', '#F2703F']}
                                    start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                                    style={{ height: 39, width: 39, alignItems: 'center', justifyContent: 'center', borderRadius: 39 / 2 }}>

                                    <Image
                                        style={styles.image}
                                        source={{ uri: profilePicture }}
                                    />
                                </LinearGradient>
                            </Pressable>
                        </Pressable> :
                        <Pressable
                            style={({ pressed }) => [
                                pressed && {
                                    transform: [{
                                        scale: 0.94,

                                    }],

                                }
                            ]}>

                            <Image
                                style={styles.profilePicture}
                                source={{ uri: profilePicture }}
                            />

                        </Pressable>

                    }
                    <View style={styles.topBarText}>
                        <Pressable>
                            <Text style={styles.profileNickname}>{nick}</Text>
                        </Pressable>
                        <Pressable>
                            <Text style={styles.locationTag}>{locationTag}</Text>
                        </Pressable>
                    </View>
                </View>
                <Pressable>
                    <Entypo name="dots-three-vertical" size={21} color="white" />
                </Pressable>
            </View>

            <Image
                source={{ uri: imageUrl }}
                style={{
                    width: width,
                    height: height,
                }}
            />


            <View style={styles.feedbackContainer}>
                <View style={styles.feedbackUpperContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Pressable onPress={toggleLike}>
                            {!likePressed ?
                                <AntDesign
                                    name="hearto"
                                    size={24}
                                    color="white"
                                    style={styles.icon}
                                /> :
                                <AntDesign
                                    name="heart"
                                    size={24}
                                    color="red"
                                    style={styles.icon}
                                />}
                        </Pressable>
                        <Pressable
                        onPress={() => {
                            navigation.navigate('CommentsScreen',
                            {
                                nick: nick,
                                profilePicture: profilePicture,
                                description: description,
                                time: time,
                                comments: comments,
                            })
                        }}
                        >
                        <FontAwesome5
                            name="comment"
                            size={24}
                            color="white"
                            style={styles.icon}
                        />
                        </Pressable>
                        <Feather
                            name="send"
                            size={24}
                            color="white"
                            style={styles.icon}
                        />
                    </View>
                    <Pressable onPress={toggleBookmark}>
                        {!bookmarkPressed ?
                            <Ionicons name="ios-bookmark-outline" size={28} color="white" />
                            : <Ionicons name="ios-bookmark" size={28} color="white" />}

                    </Pressable>
                </View>

            </View>
            {like != 0 ? <Text style={[
                styles.profileNickname,
            ]}>{like != 0 && like} {like === 0 ? null : like > 1 ? 'likes' : 'like'}</Text> : null}
            <Text style={styles.nickAndPhotoDescription}>
                <Text style={[
                    styles.profileNickname,
                ]}>{nick} </Text>
                <Text style={styles.description}>
                    {description}
                </Text>
            </Text>
            <View style={styles.comments}>
                <Pressable
                    onPress={() => {
                        navigation.navigate('CommentsScreen',
                            {
                                nick: nick,
                                profilePicture: profilePicture,
                                description: description,
                                time: time,
                                comments: comments,
                            }
                        );
                    }}
                >
                    <Text
                        style={{ color: 'gray', marginLeft: 10, }}
                    >View all {comments.length} comments</Text>
                </Pressable>
            </View>
            <Text style={styles.photoTimeText}>{time}</Text>
        </View >
    );
}

export default Post;

const styles = StyleSheet.create({
    container: {
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
    },
    image: {
        width: 36,
        height: 36,
        borderRadius: 36 / 2,
        padding: 10,
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: 3,
    },
    profileNickname: {
        color: 'white',
        fontSize: 14,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    story: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    topBarLeftSide: {
        flexDirection: 'row',
    },
    locationTag: {
        color: 'white',
        fontSize: 12,
        marginLeft: 10,
    },
    topBarText: {

    },
    feedbackContainer: {

    },
    feedbackUpperContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 5,
        marginHorizontal: 10,
        justifyContent: 'space-between'
    },
    icon: {
        marginRight: 20,
    },
    description: {
        fontSize: 14,
        color: 'white',
    },
    nickAndPhotoDescription: {
        flexDirection: 'row',
        marginHorizontal: 10,

    },
    photoTimeText: {
        color: 'gray',
        marginLeft: 10,
        marginTop: 10,
        fontSize: 9,
    },
    profilePicture: {
        width: 36,
        height: 36,
        borderRadius: 39 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    comments: {

    },
});

