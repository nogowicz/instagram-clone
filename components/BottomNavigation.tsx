import {
    View,
    StyleSheet,
    Image
} from 'react-native';

import { Ionicons, Feather } from '@expo/vector-icons';

const BottomNavigation = () => {
    return (
        <View style={styles.container}>
            <Ionicons name="ios-home" size={26} color="white" />
            <Ionicons name="search" size={26} color="white" />
            <Ionicons name="ios-play-circle-outline" size={26} color="white" />
            <Feather name="shopping-bag" size={26} color="white" />
            <Image
                source={require('../assets/portrait.jpg')}
                style={styles.image}
            />
        </View>
    );
}

export default BottomNavigation;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginVertical: 12,
    },
    image: {
        width: 28,
        height: 28,
        borderRadius: 28 / 2,
    },
});