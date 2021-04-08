import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddEmployeeScreen from '../screens/AddEmployeeScreen';

const Stack = createStackNavigator();

function StackNavig() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        keyboardHandlingEnabled
        mode="modal"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddEmployeeScreen" component={AddEmployeeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavig;
