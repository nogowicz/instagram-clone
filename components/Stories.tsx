import {
    View,
    Image,
    TouchableHighlight,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { users } from '../data/users';

const Stories = () => {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
            >
                {users.map((story, index) => (
                    <TouchableHighlight
                        style={styles.story}
                        underlayColor='white'
                        key={index}
                    >
                        <>
                            <LinearGradient
                                colors={['#CA1D7E', '#E35157', '#F2703F']}
                                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                                style={{ height: 67, width: 67, alignItems: 'center', justifyContent: 'center', borderRadius: 67 / 2 }}>

                                <Image
                                    style={styles.image}
                                    source={{ uri: story.image }}
                                />
                            </LinearGradient>
                            <Text style={styles.profileNickname}>{story.user}</Text>
                        </>
                    </TouchableHighlight>
                ))}




            </ScrollView>
        </View>
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
        marginHorizontal: 5,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 65 / 2,
        padding: 10,
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: 2,
    },
    profileNickname: {
        color: 'white',
    },
});