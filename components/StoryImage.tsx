import {
    ImageBackground,
    View,
    Text,
    TextInput,
    Pressable,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';

import {useState} from 'react';

import {Entypo, Feather, AntDesign} from '@expo/vector-icons'

type Props ={
    nick: string,
    imageUrl: string,
    profilePicture: string,
    time: string,
    children: any
}

const StoryImage = (props: Props) => {

    const {
        nick,
        imageUrl,
        profilePicture,
        time,
        children
    } = props;
    
    const [likePressed, setLikePressed] = useState(false);

    const toggleLike = () => {
        likePressed === false ? setLikePressed(true) : setLikePressed(false);
    }


    return(
        <ImageBackground
        source={{ uri: imageUrl }}
        style={{
            flex: 1,
        }}

    >
        {children}
            
        <View style={styles.topBar}> 
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable style={({ pressed }) => [
                        pressed && {
                            transform: [{
                                scale: 0.94,

                            }],

                        },
                        styles.userContainer
                    ]}>

                        <Image
                            style={styles.profilePicture}
                            source={{ uri: profilePicture }}
                        />
                        <Text style={styles.profileNickname}>{nick}</Text>
                    </Pressable>
                    <Text style={styles.photoTimeText}>{time}</Text>
                </View>
                <Pressable>
                    <Entypo name="dots-three-vertical" size={18} color="white" />
                </Pressable>

        </View>

        <View style={styles.bottomBar}>
            <TextInput
                style={styles.textInput}
                placeholder='Send message'
                placeholderTextColor='white'
            />
            <Pressable onPress={toggleLike}>
                {!likePressed ?
                    <AntDesign
                        name="hearto"
                        size={28}
                        color="white"
                        style={{ marginHorizontal: 10 }}
                    /> :
                    <AntDesign
                        name="heart"
                        size={28}
                        color="red"
                        style={{ marginHorizontal: 10 }}

                    />}

            </Pressable>
            <Feather
                name="send"
                size={28}
                color="white"
                style={{ marginHorizontal: 10 }}
            />
        </View>
   
    </ImageBackground>
    );
}

export default StoryImage;


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    profilePicture: {
        width: 36,
        height: 36,
        borderRadius: 39 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    profileNickname: {
        color: 'white',
        fontSize: 14,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    topBar: {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'

    },
    photoTimeText: {
        color: '#ccc',
        marginLeft: 10,
        fontSize: 13,
    },
    bottomBar: {
        bottom: 20,
        marginHorizontal: 20,
        position: 'absolute',
        width: windowWidth,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput: {
        height: 50,
        width: '65%',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
   
});