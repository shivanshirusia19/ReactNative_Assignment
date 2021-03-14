import * as React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Sectionlist from './Sectionlist';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      {/* <Text>Home Screen</Text> */}
      <Button
        color="#4f8080"
        title="Click Here"
        onPress={() => navigation.navigate('Sectionlist')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function SectionlistStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sectionlist" component={Sectionlist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default SectionlistStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
