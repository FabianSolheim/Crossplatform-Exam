import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import SearchScreen from "../screens/SearchScreen";
import SearchResultScreen from "../screens/SearchResultScreen/SearchResultScreen";

export type RootStackParamList = {
    SearchScreen: undefined;
    SearchResultScreen: undefined;
}

const SearchNavigation = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <Stack.Navigator>
            <Stack.Screen name="SearchScreen" component={SearchScreen} options={{
                headerTitle: "Countries"
            }}/>
            <Stack.Screen name="SearchResultScreen" component={SearchResultScreen} options={{
                headerTitle: "Country"
            }}/>
        </Stack.Navigator>
    )
}

export default SearchNavigation;
