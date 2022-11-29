import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    Modal,
    View,
    Pressable,
    Animated,
} from 'react-native';
import {useState, useEffect, useRef} from 'react';
import { useRoute } from '@react-navigation/native';
import GestureRecognizer from 'react-native-swipe-gestures';
import StoryImage from '../components/StoryImage';


type RootStackParamList = {
    StoryScreen: undefined;
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'StoryScreen'
>;


type Props = {
    navigation: ProfileScreenNavigationProp;

}


const StoryScreen = ({ navigation }: Props) => {
    const route = useRoute<any>();
    const { nick, profilePicture, story } = route.params;
const [current, setCurrent] = useState({data: story[0], index: 0});

useEffect(() => {
    const timer = setTimeout(() => {
        if(current.index === story.length - 1) {
            return navigation.goBack()
        }
        setCurrent({
            ...current,
            index: current.index + 1,
            data: story[current.index + 1]
        })
    }, 3000);
    return () => clearTimeout(timer);
}, [current]);

const ProgressView = () => {
    const progressAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(
            progressAnim,
            {
                toValue: (windowWidth - 20) / story.length,
                duration: 3000,
                useNativeDriver: false
            }
        ).start();
    }, [progressAnim]);

    return(
        <Animated.Text style={{backgroundColor: '#ffffff', width: progressAnim, borderRadius: 5}}></Animated.Text>
    )
}

    return (
        <GestureRecognizer
            onSwipeDown={() => {
                navigation.goBack();
            }}
            style={styles.container}
        >
            <SafeAreaView>

                <Modal
                    style={styles.container}
                    animationType='slide'
                    statusBarTranslucent={false}
                >
                    
                      <StoryImage 
                         nick={nick}
                         imageUrl={current.data.imageURL}
                         profilePicture={profilePicture}
                         time={current.data.time}
                      >
                <View style={{flexDirection: 'row'}}>
                    {story.map((story: any, index: number) => (
                        <View style={[
                            styles.statusTab,
                        ]}
                        key={index}
                        >
                            {current.index === index ? <ProgressView /> : null}
                        </View>
                        
                    ))}
                    </View>
                      </StoryImage>
                         <Pressable
            onPress={() => {
                if(current.index === 0) {
                    return navigation.goBack()
                }
                setCurrent({
                    ...current,
                    index: current.index - 1,
                    data: story[current.index - 1]
                })
            }}
            style={[styles.controller]}
            >
        </Pressable>
        <Pressable
            onPress={() => {
                if(current.index === story.length - 1) {
                    return navigation.goBack()
                }
                setCurrent({
                    ...current,
                    index: current.index + 1,
                    data: story[current.index + 1]
                })
            }}
            style={[styles.controller, {right: 0}]}
            >
        </Pressable>
                </Modal>
            </SafeAreaView>
         </GestureRecognizer>
    );
}

export default StoryScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: 40,
    },
    statusTab: {
        height: 4,
        flex: 1,
        marginTop: 20,
        marginHorizontal: 3,
        backgroundColor: '#bbbbbb',
        borderRadius: 5,
    },
    
    controller: {
        position: 'absolute',
        width: windowWidth/2,
        height: windowHeight * 0.8,
        bottom: 80

    },
});