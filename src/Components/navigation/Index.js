import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ViewNotes from '../screen/ViewNotes';
import AddNotes from '../screen/AddNotes';

const Stack = createStackNavigator();

class StackNavig extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'ViewNotes'}
          mode="modal"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="ViewNotes" component={ViewNotes} />
          <Stack.Screen name="AddNotes" component={AddNotes} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default StackNavig;
