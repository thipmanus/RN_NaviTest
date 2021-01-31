import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TabOne from './screens/TabOne';
import TabTwo from './screens/TabTwo';
import TabThree from './screens/TabThree';
import TabFour from './screens/TabFour';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="TabOne"
        component={TabOne}
        options={{
          tabBarLabel: 'TabOne',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TabTwo"
        component={TabTwo}
        options={{
          tabBarLabel: 'TabTwo',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-create-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TabThree"
        component={TabThree}
        options={{
          tabBarLabel: 'TabThree',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-search-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TabFour"
        component={TabFour}
        options={{
          tabBarLabel: 'TabFour',
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="ios-thermometer-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
