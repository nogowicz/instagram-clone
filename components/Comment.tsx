import {
    StyleSheet,
    View,
    Text,
    Pressable,
    Image,
} from 'react-native';

import {
    AntDesign,
} from '@expo/vector-icons';
import { useState } from 'react';

type postProps = {
    nick: string;
    comment: string;
    profilePicture: string;
    likes: number;
    time: string;
};

const Comment = (props: postProps) => {
    const {
        nick,
        profilePicture,
        likes,
        time,
        comment
    } = props;
    const [likePressed, setLikePressed] = useState(false);

    const toggleLike = () => {
        likePressed === false ? setLikePressed(true) : setLikePressed(false);
    }
    return (
        <View
            style={styles.commentContainer}
        >
            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={{ uri: profilePicture }}
                    style={styles.profilePicture}
                />

                <View style={styles.nickAndPhotoDescription}>
                    <Text>
                        <Text style={[
                            styles.profileNickname,
                        ]}>{nick} </Text>
                        <Text style={styles.photoTimeText}>   {time}</Text>
                    </Text>
                    <Text style={styles.description}>
                        {comment}
                    </Text>
                </View>
            </View>
            <View>
                <Pressable
                    onPress={toggleLike}
                    style={{ justifyContent: 'center', alignItems: 'center', }}
                >
                    {!likePressed ?
                        <>
                            <AntDesign
                                name="hearto"
                                size={15}
                                color="gray"
                                style={styles.icon}
                            />
                            <Text style={styles.commentLikes}>{likes}</Text>
                        </> :
                        <>
                            <AntDesign
                                name="heart"
                                size={15}
                                color="red"
                                style={styles.icon}
                            />
                            <Text style={styles.commentLikes}>{likes + 1}</Text>
                        </>}
                </Pressable>
            </View>

        </View>
    );
}

export default Comment;

const styles = StyleSheet.create({
    commentContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 25,
        marginVertical: -10,
        justifyContent: 'space-between',
        marginLeft: 10,
    },
    icon: {
        marginRight: 20,
    },
    commentLikes: {
        color: 'gray',
        marginRight: 20,
    },
    photoTimeText: {
        color: 'gray',
        marginLeft: 10,
        marginTop: 10,
        fontSize: 12,
    },
    profileNickname: {
        color: 'white',
        fontSize: 14,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    profilePicture: {
        width: 36,
        height: 36,
        borderRadius: 39 / 2,
        padding: 10,
        marginTop: 3,
    },
    nickAndPhotoDescription: {
        marginHorizontal: 10,

    },
    description: {
        fontSize: 14,
        color: 'white',
        marginRight: 30,
    },
});