import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import SearchScreen from "../screens/SearchScreen";

const SearchNavigation = () => {
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={SearchScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default SearchNavigation;
