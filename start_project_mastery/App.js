import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS, images, icons } from './constants';
import { ScreenHeaderBtn } from './components';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import JobDetails from './components/main/job-details/JobDetails';
import JobSearch from './components/main/job-search/JobSearch';
import MainScreen from './components/main/main-screen/MainScreen';
import { SplashScreen } from "expo-router";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StackContainer />
        </NavigationContainer>
    );
}

const StackContainer = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('./assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('./assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('./assets/fonts/DMSans-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return (
        <Stack.Navigator onLayout={onLayoutRootView}>
            <Stack.Screen
                name="MainScreen"
                component={MainScreen}
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={images.profile}
                            dimension="100%"
                        />
                    ),
                    headerTitle: '',
                }}
            />
            <Stack.Screen
                name="JobDetails"
                component={JobDetails}
                options={({ navigation }) => ({
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension="60%"
                            handlePress={() => navigation.goBack()}
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.share}
                            dimension="60%"
                        />
                    ),
                    headerTitle: '',
                })}
            />
            <Stack.Screen
                name="JobSearch"
                component={JobSearch}
                options={({ navigation }) => ({
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension="60%"
                            handlePress={() => navigation.goBack()}
                        />
                    ),
                    headerTitle: '',
                })}
            />
        </Stack.Navigator>
    );
};
