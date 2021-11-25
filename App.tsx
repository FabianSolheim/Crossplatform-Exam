import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

//Navigators
import HomeNavigation from "./navigation/HomeNavigation";
import SearchNavigation from "./navigation/SearchNavigation";

const App = () => {
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
          {/*@ts-ignore*/ }
        <Tab.Navigator backBehavior={"history"} >
          <Tab.Screen name="Overview" component={HomeNavigation} options={{
              tabBarIcon: ({size, color}) => (
                  <Ionicons name="home-sharp" size={size} color={color} />
              )
          }}/>
            <Tab.Screen name="Search" component={SearchNavigation} options={{
                tabBarIcon: ({size, color}) => (
                    <Ionicons name="search" size={size} color={color} />
                ),
                headerShown: false
            }}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App;
