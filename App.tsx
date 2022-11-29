import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import CommentsScreen from "./screens/CommentsScreen";
import StoryScreen from "./screens/StoryScreen";

type RootStackParamList = {
  HomeScreen: undefined;
  CommentsScreen: undefined;
  StoryScreen: undefined;
};

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CommentsScreen"
            component={CommentsScreen}
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right'
            }}

          />
          <Stack.Screen
            name="StoryScreen"
            component={StoryScreen}
            options={{
              headerShown: false,
              presentation: 'modal',
              animationTypeForReplace: 'push',
              animation: 'none'
            }}

          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
