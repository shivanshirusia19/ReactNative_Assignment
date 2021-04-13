import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert, Image} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

class GoogleSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: '',
      isLoggedIn: false,
      error: '',
    };
  }
  componentDidMount() {
    GoogleSignin.configure({
      webClientId:
        '260374356350-vd2bb7021jbhm36fg2ekhvgloftfvkkp.apps.googleusercontent.com',
    });
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({
        userInfo,
        isLoggedIn: true,
      });
      //alert(JSON.stringify(userInfo));
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        Alert.alert('Process Cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        Alert.alert('Process in Progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        Alert.alert('Play Services are not available');
      } else {
        // some other error happened
        Alert.alert('Something else went wrong...', error.toString());
        this.setState({
          error,
        });
      }
    }
  };

  getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        Alert.alert('Please Sign In');
        this.setState({
          isLoggedIn: false,
        });
      } else {
        Alert.alert('Something else went wrong...', error.toString());
        this.setState({
          isLoggedIn: false,
        });
      }
    }
  };

  render() {
    //const {isLoggedIn, userInfo} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.headingText}>Google Sign In</Text>
        <GoogleSigninButton
          style={styles.button}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.signIn}
        />
        <View style={styles.status}>
          {this.state.isLoggedIn === false ? (
            <Text style={styles.loggedinMessage}> You must sign in!</Text>
          ) : null}
        </View>
        <View style={styles.userInfoContainer}>
          {this.state.isLoggedIn === true ? (
            <>
              <Text style={styles.displayTitle}>
                Welcome {this.state.userInfo.user.name}
              </Text>
              <View style={styles.profileImageContainer}>
                <Image
                  style={styles.profileImage}
                  source={{
                    uri:
                      this.state.userInfo &&
                      this.state.userInfo.user &&
                      this.state.userInfo.user.photo,
                  }}
                />
              </View>
            </>
          ) : null}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 20,
  },
  messageText: {
    fontSize: 16,
  },
  button: {
    width: 200,
    height: 50,
  },
  userInfoContainer: {
    marginVertical: 20,
  },
  profileImageContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
  },
  displayTitle: {
    fontSize: 22,
    color: '#010101',
  },
});

export default GoogleSignIn;
