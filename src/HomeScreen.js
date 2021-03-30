import React, {Component} from 'react';
import {
  Button,
  View,
  StyleSheet,
  Alert,
  SafeAreaView,
  Text,
} from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData = async () => {
    try {
      const data = await AsyncStorage.getItem('userData');
      this.setState(JSON.parse(data));
    } catch (err) {
      console.log(err);
    }
  };

  signOutButton = () => {
    Alert.alert('', 'Are you sure you want to sign out?', [
      {
        text: 'Yes',
        onPress: this.signOut,
        style: 'destructive',
      },
      {
        text: 'No',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
  };

  signOut = async () => {
    try {
      await AsyncStorage.clear();
      this.props.navigation.reset({
        index: 0,
        routes: [{name: 'Sign Up'}],
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <>
        <SafeAreaView />
        <View style={styles.container}>
          <View style={styles.header}>
            <Button title="Sign Out" onPress={this.signOutButton} />
          </View>
          <View style={styles.body}>
            <View style={styles.line}>
              <Text style={styles.helloText}>Hello </Text>
              <Text style={styles.nameText}>{this.state.name}!</Text>
            </View>
            <Text style={styles.text}>Your email is: {this.state.email}</Text>
            <Text style={styles.text}>
              Your phone no. is: {this.state.phone}
            </Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'gainsboro',
    width: '100%',
    height: 60,
  },
  body: {
    flex: 1,
  },
  line: {
    flexDirection: 'row',
    padding: 20,
    paddingTop: 50,
  },
  helloText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  nameText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#1874cd',
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    paddingHorizontal: 50,
  },
});
