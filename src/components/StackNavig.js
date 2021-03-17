import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

class StackNavig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDataLoaded: false,
    };
  }
  componentDidMount() {
    this.checkDataLoaded();
  }

  checkDataLoaded = async () => {
    try {
      const data = await AsyncStorage.getItem('userData');
      if (data !== null) {
        this.setState({isDataLoaded: true});
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={this.state.isDataLoaded ? 'Home' : 'Sign Up'}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Sign Up" component={SignUpScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default StackNavig;
