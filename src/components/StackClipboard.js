import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import InputClipboard from './InputClipboard';
import DisplayClipboard from './DisplayClipboard';

const Stack = createStackNavigator();

const StackClipboardEx = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={InputClipboard} />
        <Stack.Screen name="Display" component={DisplayClipboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackClipboardEx;
