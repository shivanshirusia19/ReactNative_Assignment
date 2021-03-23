import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
            placeholder="Your Email Address"
          />
          <View style={styles.textInputView}>
            <TextInput
              style={styles.passwordTextInput}
              value={this.state.password}
              onChangeText={(password) => this.setState({password})}
              placeholder="Password"
            />
            <TouchableOpacity>
              <Text style={styles.showText}>Show</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signIn}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles.orView}>
            <Text style={styles.orText}>or</Text>
          </View>

          <TouchableOpacity style={styles.signInGoogle}>
            <Icon name={'google'} size={28} color={'black'} />
            <Text style={styles.signInTextGoole}>Sign In with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signInFb}>
            <Icon name={'facebook'} size={28} color={'white'} />
            <Text style={styles.signInTextFb}>Sign In with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signIn}>
            <Icon name={'apple'} size={28} color={'white'} />
            <Text style={styles.signInText}>Sign In with Apple</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.footerView}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <Text style={styles.footerSigninText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  textInput: {
    height: 60,
    width: '90%',
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: 'darkgrey',
    fontSize: 16,
    color: 'darkgrey',
    margin: 10,
  },
  textInputView: {
    height: 60,
    width: '90%',
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: 'darkgrey',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  passwordTextInput: {
    height: 60,
    width: '80%',
    fontSize: 16,
    color: 'darkgrey',
  },
  showText: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '500',
    paddingRight: 20,
  },
  forgotText: {
    fontSize: 17,
    fontWeight: '600',
    paddingVertical: 20,
  },
  signIn: {
    height: 60,
    width: '90%',
    borderWidth: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  signInText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    paddingHorizontal: 20,
  },
  orView: {
    marginVertical: 30,
    borderWidth: 1,
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: 'darkgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orText: {
    fontSize: 22,
    color: 'darkgrey',
  },
  signInGoogle: {
    height: 60,
    width: '90%',
    borderWidth: 1,
    //backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },
  signInTextGoole: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    paddingHorizontal: 20,
  },
  signInFb: {
    height: 60,
    width: '90%',
    borderWidth: 1,
    backgroundColor: '#3b5998',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },
  signInTextFb: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    paddingHorizontal: 20,
  },
  footerView: {
    height: 60,
    width: '90%',
    borderWidth: 1,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 15,
    //marginTop: 100,
  },
  footerText: {
    fontSize: 16,
    color: 'gray',
  },
  footerSigninText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    paddingLeft: 10,
  },
});
