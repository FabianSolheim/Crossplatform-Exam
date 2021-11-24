import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
//Screens
import SearchScreen from "../screens/SearchScreen";
import SearchResultScreen from "../screens/SearchResultScreen/SearchResultScreen";


export type RootStackParamList = {
    SearchScreen: undefined;
    SearchResultScreen: undefined;
}

export type Props = {

}
const SearchNavigation = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    return(
        <Stack.Navigator>
            <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown: false}} />
            <Stack.Screen name="SearchResultScreen" component={SearchResultScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default SearchNavigation;
