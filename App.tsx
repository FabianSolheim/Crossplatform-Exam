import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Fontisto } from '@expo/vector-icons';

//Navigators
import HomeNavigation from "./navigation/HomeNavigation";
import SearchNavigation from "./navigation/SearchNavigation";


//TODO: REQUEST LOCATION FROM USER
const App = () => {
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Overview" component={HomeNavigation} options={{
              tabBarIcon: ({size, color}) => (
                  <Fontisto name="home" size={size} color={color} />
              )
          }}/>
            <Tab.Screen name="Countries" component={SearchNavigation} options={{
                tabBarIcon: ({size, color}) => (
                    <Fontisto name="world-o" size={size} color={color} />
                ),
                headerShown: false
            }}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App;
