import React from 'react';
import { StyleSheet,  View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

function Screen1(){

    return(
        <Stack.Navigator>
            <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={ {
                title: 'MEN CLOTHING'
            } }
            />
        </Stack.Navigator>
    );
}

export default Screen1;