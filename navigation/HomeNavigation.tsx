import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import HomeScreen from "../screens/HomeScreen";

const HomeNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                headerShown: false
            }}/>
        </Stack.Navigator>
    );
}

export default HomeNavigation;
