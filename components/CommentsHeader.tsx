import {
    View,
    Image,
    StyleSheet,
    Text,
    Pressable,
    TouchableOpacity,
} from 'react-native';
import {
    Ionicons,
    Feather,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const unreadNumber: number = 7;
const CommentsHeader = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    return (
        <View style={styles.container}>
            <View style={styles.leftSideButtonsContainer}>
                <Pressable
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons
                        name="arrow-back"
                        size={24} color="white"
                        style={styles.icon}
                    />
                </Pressable>
                <Text style={styles.title}>Comments</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.unreadBadge}>
                    <Text style={styles.unreadBadgeText}>{unreadNumber}</Text>
                </View>
                <Feather
                    name="send"
                    size={24}
                    color="white"
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    );
}

export default CommentsHeader;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 40,
        paddingVertical: 10,
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
        marginHorizontal: 5,
    },
    leftSideButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginHorizontal: 10,
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: 20,
    },
    unreadBadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: (unreadNumber > 9 ? 26 : 32),
        bottom: 18,
        width: (unreadNumber > 9 ? 25 : 18),
        height: 18,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
    },
    unreadBadgeText: {
        color: 'white',
        fontWeight: '600',
    },

});