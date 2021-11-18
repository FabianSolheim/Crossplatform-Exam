import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//Navigators
import HomeNavigation from "./navigation/HomeNavigation";
import SearchNavigation from "./navigation/SearchNavigation";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeNavigation} />
            <Tab.Screen name="Search" component={SearchNavigation} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App;
