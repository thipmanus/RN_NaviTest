import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button} from 'react-native-elements';

import TabOne from './screens/TabOne';
import TabTwo from './screens/TabTwo';
import TabThree from './screens/TabThree';
import TabFour from './screens/TabFour';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabOneStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabOne"
        component={TabOne}
        options={{
          headerTitle: 'TabOne',
          headerStyle: {
            backgroundColor: '#ff3d3d',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            textAlign: 'center',
            fontWeight: 'bold',
            flex: 1,
            alignSelf: 'center',
            fontFamily: 'OpenSans',
            marginLeft: 56,
          },
          headerRight: () => (
            <Button
              icon={<Ionicons name="ios-log-out" color="white" size={30} />}
              type="clear"
              onPress={() => alert('Log out')}
              buttonStyle={{marginRight: 5}}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function TabTwoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabTwo"
        component={TabTwo}
        options={{
          headerTitle: 'TabTwo',
          headerStyle: {
            backgroundColor: '#ff3d3d',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            textAlign: 'center',
            fontWeight: 'bold',
            flex: 1,
            alignSelf: 'center',
            fontFamily: 'OpenSans',
          },
        }}
      />
    </Stack.Navigator>
  );
}

function TabThreeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabThree"
        component={TabThree}
        options={{
          headerTitle: 'TabThree',
          headerStyle: {
            backgroundColor: '#ff3d3d',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            textAlign: 'center',
            fontWeight: 'bold',
            flex: 1,
            alignSelf: 'center',
            fontFamily: 'OpenSans',
          },
        }}
      />
    </Stack.Navigator>
  );
}
function TabFourStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabFour"
        component={TabFour}
        options={{
          headerTitle: 'TabFour',
          headerStyle: {
            backgroundColor: '#ff3d3d',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            textAlign: 'center',
            fontWeight: 'bold',
            flex: 1,
            alignSelf: 'center',
            fontFamily: 'OpenSans',
          },
        }}
      />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        showLabel: false,
        style: {
          backgroundColor: '#ff3d3d',
        },
      }}>
      <Tab.Screen
        name="TabOne"
        component={TabOneStack}
        options={{
          tabBarLabel: 'TabOne',
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              name={focused ? 'ios-home' : 'ios-home-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TabTwo"
        component={TabTwoStack}
        options={{
          tabBarLabel: 'TabTwo',
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              name={focused ? 'ios-create' : 'ios-create-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TabThree"
        component={TabThreeStack}
        options={{
          tabBarLabel: 'TabThree',
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              name={focused ? 'ios-search' : 'ios-search-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TabFour"
        component={TabFourStack}
        options={{
          tabBarLabel: 'TabFour',
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              name={focused ? 'ios-thermometer' : 'ios-thermometer-outline'}
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
