import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Fontisto} from '@expo/vector-icons';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootSiblingParent} from 'react-native-root-siblings';

//Navigators
import HomeNavigation from "./navigation/HomeNavigation";
import SearchNavigation from "./navigation/SearchNavigation";
import {
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
    useFonts
} from "@expo-google-fonts/lato";

import LoadingView from "./components/LoadingView";


//TODO: REQUEST LOCATION FROM USER
const App = () => {
    const Tab = createBottomTabNavigator();

    //Custom fonts
    let [fontsLoaded] = useFonts({
        Lato_100Thin,
        Lato_100Thin_Italic,
        Lato_300Light,
        Lato_300Light_Italic,
        Lato_400Regular,
        Lato_400Regular_Italic,
        Lato_700Bold,
        Lato_700Bold_Italic,
        Lato_900Black,
        Lato_900Black_Italic,
    });

    if (!fontsLoaded) {
        return <LoadingView/>
    } else {
        return (
                <SafeAreaProvider>
                    <NavigationContainer>
                        <Tab.Navigator>
                            <Tab.Screen name="Overview" component={HomeNavigation} options={{
                                tabBarIcon: ({size, color}) => (
                                    <Fontisto name="home" size={size} color={color}/>
                                )
                            }}/>
                            <Tab.Screen name="Countries" component={SearchNavigation} options={{
                                tabBarIcon: ({size, color}) => (
                                    <Fontisto name="world-o" size={size} color={color}/>
                                ),
                                headerShown: false
                            }}/>
                        </Tab.Navigator>
                    </NavigationContainer>
                </SafeAreaProvider>
        );
    }
}

export default App;
