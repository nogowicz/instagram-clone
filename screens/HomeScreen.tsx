import {
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet,

} from 'react-native';
import Header from '../components/Header';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView>

            </ScrollView>
        </SafeAreaView>
    );
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,

    },
});