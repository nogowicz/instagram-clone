import {
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Text,
    Dimensions,
} from 'react-native';
import { useState } from 'react';
const CommentInput = () => {
    const [value, setValue] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image
                    source={require('../assets/portrait.jpg')}
                    style={styles.profilePicture}
                />
                <TextInput
                    value={value}
                    onChangeText={(text) => setValue(text)}
                    style={styles.input}
                    placeholder='Add a comment...'
                    placeholderTextColor='white'
                    multiline={true}

                />
            </View>
            <TouchableOpacity
                onPress={() => setValue('')}
            >
                <Text
                    style={[
                        styles.postButtonText,
                        !value && { opacity: 0.5 }
                    ]}
                >Post</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CommentInput;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#262626',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: deviceWidth,
    },
    profilePicture: {
        width: 36,
        height: 36,
        borderRadius: 39 / 2,
        padding: 10,
        marginTop: 3,
    },
    input: {
        color: 'white',
        marginLeft: 10,
        maxWidth: '78%'
    },
    postButtonText: {
        color: '#0799eb',
        fontSize: 15,
    },
    leftContainer: {
        flexDirection: 'row',
    },
});