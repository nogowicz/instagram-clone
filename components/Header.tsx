import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';
import {
    Octicons,
    AntDesign,
    Feather,
} from '@expo/vector-icons';
const unreadNumber: number = 7;

const Header = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/text-logo.png')}
            />
            <View style={styles.rightSideButtonsContainer}>
                <TouchableOpacity>
                    <Octicons
                        name="diff-added"
                        size={24}
                        color="white"
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign
                        name="hearto"
                        size={24}
                        color="white"
                        style={styles.icon}
                    />
                </TouchableOpacity>
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
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 40,
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
        marginHorizontal: 5,
    },
    rightSideButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
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