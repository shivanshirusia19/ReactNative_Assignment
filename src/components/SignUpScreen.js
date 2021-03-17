import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
//import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    };
  }

  onPressEvent = async () => {
    try {
      const data = JSON.stringify(this.state);
      await AsyncStorage.setItem('userData', data);
      this.props.navigation.navigate('Home');
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <Text style={styles.header}>Let's Get Started!</Text>
          <Text style={styles.header2}>
            Create an account to Q Allure to get all features
          </Text>
          <View style={styles.cell}>
            <Icon
              name="person-outline"
              type="ionicon"
              color="lightgrey"
              solid={false}
            />
            <TextInput
              style={styles.textInput}
              value={this.state.name}
              onChangeText={(name) => this.setState({name})}
              placeholder="Name"
            />
          </View>
          <View style={styles.cell}>
            <Icon
              name="mail-outline"
              type="ionicon"
              color="lightgrey"
              solid={false}
            />
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              value={this.state.email}
              onChangeText={(email) => this.setState({email})}
              placeholder="Email"
            />
          </View>
          <View style={styles.cell}>
            <Icon
              name="phone-portrait-outline"
              type="ionicon"
              color="lightgrey"
              solid={false}
            />
            <TextInput
              style={styles.textInput}
              value={this.state.phone}
              onChangeText={(phone) => this.setState({phone})}
              placeholder="Phone"
            />
          </View>
          <View style={styles.cell}>
            <Icon
              name="lock-closed-outline"
              type="ionicon"
              color="lightgrey"
              solid={false}
            />
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              autoCapitalize="none"
              value={this.state.password}
              onChangeText={(password) => this.setState({password})}
              placeholder="Password"
            />
          </View>
          <View style={styles.cell}>
            <Icon
              name="lock-closed-outline"
              type="ionicon"
              color="lightgrey"
              solid={false}
            />
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              secureTextEntry={true}
              value={this.state.confirmPassword}
              onChangeText={(confirmPassword) =>
                this.setState({confirmPassword})
              }
              placeholder="Confirm Password"
            />
          </View>
          <TouchableOpacity onPress={this.onPressEvent}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>CREATE</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Login here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gainsboro',
  },
  viewContainer: {
    height: 720,
    width: 350,
    backgroundColor: 'whitesmoke',
    borderRadius: 50,
    borderColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'lightgrey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  header2: {
    paddingTop: 10,
    color: 'grey',
    paddingBottom: 30,
  },
  cell: {
    flexDirection: 'row',
    height: 50,
    width: 300,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 30,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  textInput: {
    height: 40,
    width: 250,
    paddingLeft: 20,
  },
  button: {
    backgroundColor: '#1874cd',
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginVertical: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    paddingVertical: 25,
  },
  footerText: {
    color: 'dimgrey',
    fontWeight: '600',
  },
  footerLink: {
    color: '#1874cd',
    fontWeight: 'bold',
  },
});
