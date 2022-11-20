import {
    View,
    Image,
    StyleSheet
} from 'react-native';
import {
    Octicons,
    AntDesign,
    Feather,
} from '@expo/vector-icons';


const Header = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/text-logo.png')}
            />
            <View style={styles.rightSideButtonsContainer}>
                <Octicons
                    name="diff-added"
                    size={24}
                    color="white"
                    style={styles.icon}
                />
                <AntDesign
                    name="hearto"
                    size={24}
                    color="white"
                    style={styles.icon}
                />
                <Feather
                    name="send"
                    size={24}
                    color="white"
                    style={styles.icon}
                />
            </View>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        borderBottomWidth: 0.3,
        borderBottomColor: 'white',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },
    rightSideButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginHorizontal: 15,
    }
});