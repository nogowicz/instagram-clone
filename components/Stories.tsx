import {
    View,
    Image,
    Pressable,
    Text,
    StyleSheet,
    ScrollView,

} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useRef } from 'react';

import { users } from '../data/users';
const Stories = () => {

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                bounces={false}
            >
                <Pressable style={styles.addStory}>
                    <>
                        <Image
                            style={styles.image}
                            source={require('../assets/portrait.jpg')}
                        />
                        <Text style={[styles.profileNickname, { marginTop: 3 }]}>Your story</Text>
                        <MaterialIcons
                            name="add-circle"
                            size={20}
                            color="#0095F6"
                            style={{
                                position: 'absolute',
                                backgroundColor: 'white',
                                borderRadius: 24 / 2,
                                width: 20,
                                height: 20,
                                right: 3,
                                bottom: 3,
                                borderColor: 'black',
                                borderWidth: 4,
                            }}
                        />
                    </>
                </Pressable>
                {users.map((story, index) => (
                    <Pressable
                        style={styles.story}
                        key={index}
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
                                style={{ height: 70, width: 70, alignItems: 'center', justifyContent: 'center', borderRadius: 67 / 2 }}>

                                <Image
                                    style={styles.image}
                                    source={{ uri: story.image }}
                                />
                            </LinearGradient>
                        </Pressable>
                        <Text style={styles.profileNickname}>{story.user}</Text>
                    </Pressable>
                ))}

            </ScrollView>
        </View >
    );
}

export default Stories;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        borderBottomWidth: 0.2,
        borderBottomColor: 'white',
    },
    story: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },
    image: {
        width: 67,
        height: 67,
        borderRadius: 67 / 2,
        padding: 10,
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: 3,
    },
    profileNickname: {
        color: 'white',
        textAlign: 'center',
        fontSize: 12,
    },
    addStory: {
        width: 65,
        height: 65,
        borderRadius: 65 / 2,
        marginLeft: 10,
    }
});