import {
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet,

} from 'react-native';
import Header from '../components/Header';
import Stories from '../components/Stories';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView>
                <Stories />
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