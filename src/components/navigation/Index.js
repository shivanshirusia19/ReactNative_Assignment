import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VideoScreen from '../screen/VideoScreen';
import AudioScreen from '../screen/AudioScreen';
import MapScreen from '../screen/MapScreen';

const Tab = createBottomTabNavigator();

export default function BottomNavig() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'white',
          labelStyle: {fontSize: 16},
          style: {
            backgroundColor: 'black',
          },
        }}>
        <Tab.Screen name="Video" component={VideoScreen} />
        <Tab.Screen name="Audio" component={AudioScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
