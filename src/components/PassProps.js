import * as React from 'react';
import { View, Text,Button, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
    const [ postText, setPostText ] = React.useState('');

    return (
      <View style={styles.container}>
        <TextInput placeholder="What's on your mind?" style={styles.textInput} 
          value={postText} onChangeText={setPostText}
        />
        <Button
          title="Go to Profile" color='#5f9ea0'
            onPress={ () => { navigation.navigate('Profile' , {name: postText});
          }}
        />
      </View>
    );
  }

  function ProfileScreen({ navigation, route }) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome!</Text>
        <Button title="Go back" color='#5f9ea0' onPress={() => navigation.goBack()} />
      </View>
    );
  }

const Stack = createStackNavigator();

function PassProps() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle: {
              backgroundColor: '#5f9ea0',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
            }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default final;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    textInput: {
        height: 40,
        padding: 10,
        width: 250,
        margin: 20,
        borderWidth: 1,
        borderColor: '#5f9ea0',
        textAlign: 'center',
        backgroundColor: 'white',
        fontSize: 15,
    },
    text: {
        padding: 10,
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
  })
  