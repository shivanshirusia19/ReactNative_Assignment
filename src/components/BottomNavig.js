import React from 'react';
import {Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import AccountScreen from './AccountScreen';

function Screen1() {
  Alert.alert('Screen 1', 'Welcome to Screen 1!', [
    {
      text: 'OK',
      onPress: () => console.log('Screen 1 OK Pressed'),
    },
  ]);
  return null;
}

function Screen2() {
  Alert.alert('Screen 2', 'Welcome to Screen 2!', [
    {
      text: 'OK',
      onPress: () => console.log('Screen 2 OK Pressed'),
    },
  ]);
  return null;
}

function Screen3() {
  Alert.alert('Screen 3', 'Welcome to Screen 3!', [
    {
      text: 'OK',
      onPress: () => console.log('Screen 3 OK Pressed'),
    },
  ]);
  return null;
}

function Screen4() {
  Alert.alert('Screen 4', 'Welcome to Screen 4!', [
    {
      text: 'OK',
      onPress: () => console.log('Screen 4 OK Pressed'),
    },
  ]);
  return null;
}

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName={'Account'}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Categories') {
            iconName = focused ? 'list' : 'list';
          } else if (route.name === 'My Cart') {
            iconName = focused ? 'shopping-cart' : 'shopping-cart';
          } else if (route.name === 'Wishlist') {
            iconName = focused ? 'heart' : 'heart';
          } else if (route.name === 'Account') {
            iconName = focused ? 'user' : 'user';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={Screen1} />
      <Tab.Screen name="Categories" component={Screen2} />
      <Tab.Screen name="My Cart" component={Screen3} />
      <Tab.Screen name="Wishlist" component={Screen4} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

function design() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}

export default design;
