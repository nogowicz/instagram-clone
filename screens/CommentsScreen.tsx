import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
} from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native';


import CommentsHeader from "../components/CommentsHeader";
import Comment from "../components/Comment";
import CommentInput from "../components/CommentInput";
type RootStackParamList = {
    CommentsScreen: undefined;
};


type ProfileScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'CommentsScreen'
>;


type Props = {
    navigation: ProfileScreenNavigationProp;

}


const CommentsScreen = ({ navigation }: Props) => {
    const route = useRoute<any>();
    const { nick, profilePicture, description, time, comments } = route.params;

    return (
        <View style={styles.container}>
            <CommentsHeader />
            <ScrollView>
                <View style={styles.descriptionContainer}>
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
                            {description}
                        </Text>
                    </View>
                </View>
                {comments.map((comments: any, index: number) => (
                    <Comment
                        key={index}
                        nick={comments.user}
                        profilePicture={comments.profilePicture}
                        comment={comments.comment}
                        likes={comments.likes}
                        time={comments.time}
                    />
                ))}

            </ScrollView >
            <CommentInput />
        </View >
    );
}

export default CommentsScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    descriptionContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 25,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.2,

    },
    description: {
        fontSize: 14,
        color: 'white',
        marginRight: 30,
    },
    nickAndPhotoDescription: {
        marginHorizontal: 10,

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

});