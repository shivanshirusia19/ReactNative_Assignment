import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  CheckBox,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class JoinScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      mobile: '',
      value: false,
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            value={this.state.fname}
            onChangeText={(fname) => this.setState({fname})}
            placeholder="First Name"
          />
          <TextInput
            style={styles.textInput}
            value={this.state.lname}
            onChangeText={(lname) => this.setState({lname})}
            placeholder="Last Name"
          />
          <TextInput
            style={styles.textInput}
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
            placeholder="Your Email"
          />
          <TextInput
            style={styles.textInput}
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
            placeholder="Password"
          />
          <View style={styles.textInputView}>
            {/* <Image /> */}
            <Image
              source={{
                uri:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA1VBMVEXw8PDYACf///8AUrTw8/Lt1NjXAAjXAALsz9P29fIASbKcrdPlo6fXABPx9vXYACLknKHbO04ARrHcQ1TjlZoAT7OMNXvdAB0ATLIAQ7C9xt7e5OwAQa99m836+PT39/fK1OSlt9jn6u6ywdxAcL7T2+cxZ7v54eTfTl7J0+RMd8CQp9ImYbkAPa70y9BliMZwkMn77vDnhI/hYW/leINcgsYVWreIoc/vsrjgV2b04+XbJT3urLPyvsPjb3ncLkaTdqfpj5mPS4nZJz6IJ3XCpLvZFDL9F3c0AAAOA0lEQVR4nO2de3+iuhaGAzrS4DBM3WULilC11nppta3adno7s/c5/f4f6XBRJGQFUAMWpu8f+7eLdLqevCEJWQtBYuay26N+vTNfji9Xq5Vex8iV7Sr7v+0IZfmPD/qT2WWlYTZkWdc1TatUKvKacKusQbMibHfnl6bRkHUXKySaMGvOLAjb3WXFaETZ4gmzo+RNaLfmK7OhQ3CJhB4l53g4E9r9ZcPwvQMNTEHI30p+hA6eEZinXTAQUxByhuRFOArhOYDTVuMQQp7dlQ9hfWoSl57ewfKBhNwgORC2O2Yj0ieNkTWDR5tdCPkwHkx4PjYou7QKxn24m+5GyIPxQMLRhQl4pc8x6vHw0NMxCc8vTHDIbIwwspYg4h6EBzIe8NvtMcznqIoQo5vuRXhQX92b8Mcc6p9BJ3Vk8iM8hHFfwkmDMR04MlouhTWGHN6XcH/G/QhHlWvnfshRyLhAsuxFhLvm9ph2OOG+l+Nev9aad3w9rDaRa52HzkZriF5woPMQ+HkI4X427kFoO/54snrjwERtOrDwRuuANj9a1kTm4eF+jLsT2pu/ZvXDvVQzJhYcFW5fbIfVAwn3QNyZMIgbzSODZeOiB0Vv9cO3i4cS7n417vgLgYF4MKUGU13vUzbi6tzgM5YG2tHG3QiDv2LVDWguMOdVEsAarMiG4EC4o407nR38id7YAPhcgOkgTICphpDrPzgoI0J7C6gxN2K061EIcEata7T/nPHQSxaEYWsuWQtSp6P2QudN6IXPfyWFg6R77oS9FoqPfOPRODzYtOm16d9NgYeU91u+hIPrkDUIDcBVtatGl7gOabM5EQqqOuRJ2Lr2rcGo6kVurZi7hX5LYH9qBMzmRSio0g0/wu61b40z9l+23f/BD4xu6ndSjGamPzUOqDGXG6EgSI+8COtmpeFa406CuuyFfs6aLdyWsNzVgOFNjdY0ajZHQkH6yYdwYnrW4N7SwzLnjkeYityXO5KuVwPe1EibzZNQkH7zIHwwPWusUWU9Cbqh4w44I2oXFg5WA5rRtTA1JnElTIOYSOgCVoye9bDdlNEadQvupnLdGoVWA8aS7qZ8CVMgJhF6gNoYXRD7SsayCo6mcu+B2J3SK4NJxGzOhMmICYRdr5Npy0okTn0K7sJMx5ENNk2eZeth8nATT9i9XgdKsWjwSAOcGPmZO6EgxS9SYwlHzKXL/uJPKEiv+xLS0zUz8Zn+xAwIBelkP0KbzsRrF9OUgOBlmhWh2oxZhscQTukpT67D8yAFeHnOyJBmQiio7/sQQpkVoz1iRU62xMTK00PnZuppd8IJMKVrlxilAayYA2vOMDsbwphpkUXYugatwczIiZaYYtxirM0zIhSY91IMwh54d2QOEGaVIBAt8eDcVjA+y4qQOdowCMGNGG3l3jil8NA4d+4wGGZnRcgcbWDCDmihZw2rBIFoCec8ltmZEQrKXXpCxlrGGCBmbpdoiY63D5A3IeNSBAnhRaczfnh7MIkeup2UaXaGhKoAbfhDhMvrcCqlsdG1Zw2ylmZwSIbOMyr+LlT/OjgUqrfJkFBQoF1UgBD1R9uVy7S1VXu9lbg90g8ypHp9FBwdrTcUt+eNtou4LAnBNThEaIU2V8KZz2AXdJP5HIVug/U6+7xQJjVbQqGZhtBqE/fzmjlhZItwh7ifN8Zg+jCaSf1bUTOU8paCsC9HRogGGDpuX0amFL3SArLA2GmIcIP9c/pXlnr/lkgYzey6oct06FaXTiBq67GIAIxkUvlk12JUTSKsg1Oh2cFE7BjNwGVnw98SDzdEpGyRS4Y0VtEZI0Jos8pCp4Mw4Ci6MxXYSGZm1pvIuRJGPYv8zLxz0CvVUODMgrZKhciQLql1TQ6EdhwhkO/bEM5DkcEFXWuE0Hm4ewxCFEfIXlU3WkTkzAypPgsPSj3qas2D0I4hrLNzu9Xwv9GD7o/9luj7BP5/abPzIERsQrvNum9YW4MH/lhpsR42qGhrPn9+oc3OhRAxCZHFKkHwrXHHfi90zDLbbwlnElxPjVSTHZcQs0sQdDdutDS9oiAo8nBLWF1nrJWnrt2U2fkQIpjQvXVglCC41ljnK28ckt1ZnWW24TWEN75octeizT4q4dLNfMKRO9bgyWYS9DKfcDfVl9Y2k1oxZ87qNdJkORHaEGHbcBYkFtxNG9VeOG9mzKrwzNnoW5PQakBeDaLdNCdCBBG6u0/mbABdYPpsRNZ5OaGDo6nWJhOIjt3dDCr3UsimCW3PFP0Sska7jD72o8lgd16tokuG6Hl5ESKacL3ASpv4TJ1nO85YGjIxIGSUj/BWboQoSnieLt3LSG7TYi1wj0eYvJPtAS5j6i4JsfKM+RHaEUJmKR6hRp9dd0m0xLjNKgvLjRBFCOFMBUXYA3L7EEeXLmjLndAmCG1WKR4hbWzhVGabbYtRvXg0QgTXOEXD67IK2iItcWEhxtCVIyEKE9ooVeRuofAohdkuBqN6MU9CmyRMEblrDUrTTRttxGqyYxE6P1rJHnrRpTBbu2QX2eZJiLaE7pMUOLkEwbUmjdmyl+mw2K2Ul2ySkFU8sbXmwt97SVySmt7uMWz2kQj9n3UDSGiGM6R+EgrPt5nP8NN52wzppX/eaHueHCLMOG9BKELYDtTbNv9q1AsOr1tme6DXDyLXJ6HDKPIP9rZ3k9o/76e56d/hmtBGhHBvHMqQurstsLA1Cd3uNmaI1f+scJoj2/whqdp3kNDqk/fz5hIOHffIymh5dQ63BSYqo7PNAZNS79eERDzVTnQxooOhk5ldz24DyhZjMqWcK6Eg0IR0ZrcCP+KLgUwqlC2mGiJXQmnoEYY6KZXQ3IQeecQXD4CGcO3WyWwxrlINkSth7TFC2IMzu27oGpl7ghvCtbsTTuEADwvnSthceIShwNlbGVolRJg+Q0o7nSuhekoSoh67ZE0PFyEwvpnFb4pQN4Vq4PIdaaQIYUzkRsiauOo9nSzHOLKH7lCD/MsQb64vljPrTropyWB2Z2NEZEjpDa58CZ2hxiPEqOOPlcxuurbG6vpjJdNsbeXzDR4ww+x8CZXfHiEerNaZT2YJgmcNrs4M068dZZntFzQ4k45x4WWL6WrqfAmdVQ0Sq94TkZoXOqsEweuk3qOhztTohg7XgftfvuM+I+sWUrkPm9Jm50z47hBunoj06pkY3dS1xqr7c4Tmhs4yW8duJtXHdx82pc3Ol1BQbWQHqyo3dEbkjZYVKm8y51ULNlufW9YkKHiTpwOLarKcCaVbIq9tzhjdVCMeDXXTh/Bo2hgR35ihmV1rmfXzhwmEQ0SU1MvTFjRI6vMJWYmoNbrRyD2tWpGUjDGLNlnOhLVXRI7njNzSinJWXsHnRX//yPOhoDyidKkWfsqb8Ayle9yusITNO5TmSa0iEy4QOGKUh1C9RzGloqUgvEJp09ZFJXxHKR9dLiqh8IzAea1EhB9/AKEu5ys+3/WVXk1Uz1n/+5mzggfM8lI1z+yaK/SlL33pS9nLTj6l0LK/CAuvL8Li608gFJNPKrTEL8LC648gLPdQY38RFl42WU9TQolfhIVXtPqydLL/EMIyd1Oozrtcgp9GKJHsDWG1rNoQiiffyqmT4KkgRaqVUZISEC5yzlrmJLdSf034Wjt2MJmo9rp9/lA5djCZSNk+fyg+qceOJgOpT6HngB/L2E1rjyHCW+nY4WQg6Tb8jQMl7KbrTrohLGE3XXfS4Js/yjeaKiJJ+Fa2Sb/5FiG8KdtYE3xBe/BlQ/+Wa6zZvkcgIHwp15WovFCEYrm6qSTShHdlMjH0Jogt4a8ymSj9AgjF+/JMGM3QSxJChN/KY6L0DSQUr8oyYahXIkx4UhYTifewEV8qXBITCQtJwpKYSL5Kj/x271LcJjbJd7CRhMMymCgNYwjFt+IvbJSFGEd4WwLC21hC8WfRtzNq0VfLUu+Z+ZCKrY8oEEV4e1JsUe8IpN+G9OPYSb+D9IPigd7ZVWQBOPShIie9gZfnQe/OKy5i2rcDFrefgjDQwaIiwizg0WL2U6iPMt8le+xg9xIDBT5cREQWCeN48RCZIKwPinYpwhdhHGHRTGRzMD8pFmIMBvujIiHGUcR8VhzEWIi4D4sy2jBHmUTCgiDGAiYQFgIxHjCJsACICYCJhJ8eMQkwmfCTIyYCpiD81IjJgGkIPzFiCsBUhJ8WMQ1gOsJPurpJGXq60z4jYtrIU573+RBTB572RAcx72/pilF6wB0IxV9n3z+Lzn4lh7sHofgq5fx9eQxJ0usOUe9CKN6+f4YUsfJOZdC4EYrinXTsag1VuksO8wBC8UY4ro2KcJMc5EGEovh2RBtV6S05wIMJxVf1WDYq6i5DzP6Eorg4io2qtEgOjROhePOcf1FK7XnXK/AQQlH8ruTbVZVt8X1OhKK9kPKrmm5Ki1R3SlwJRXF4n9PlqEr3w+RwMiAUxW9XOTCq0tUBfAcSiuJJ1owO30lyGBkSOj4+SdmNOYr09C05hIwJnetxISlZGKkq0uKg/smN0NH3Z+4Da1N63nd+IMWH0FkDvNVq/IxUa7W3/eZ3WrwInQny5YpPb3V65xUf+zzxI3R0+3JVqzUPoVSbtdrVy053uEniSujo9nXxISl7UapNRfpYvHLFE/kTuhq+3O9K6Xgnfdy/cBg6KWVB6Gr4uPhLkmoOZzyo6jhXk6S/7h6zoHOVFaGn4evZ26lQc0CVZtN9jXSA5YA1FQetJpy+nb1mBecpU0Jft8Obx993i7en0/fnjw/h4+P5/fTpbXH3+/FmyPuiA/R/SFhl6qjljdUAAAAASUVORK5CYII=',
              }}
              style={styles.image}
            />
            <Text style={styles.textInputText}>+1</Text>
            <Text style={styles.textInputText}>|</Text>
            <TextInput
              style={styles.textInputText}
              value={this.state.mobile}
              onChangeText={(mobile) => this.setState({mobile})}
              placeholder="123 456 7890"
            />
          </View>

          <View style={styles.checkboxContainer}>
            <CheckBox
              onAnimationType="fill"
              offAnimationType="fade"
              boxType="circle"
              style={styles.checkbox}
              onFillColor="gold"
              onCheckColor="white"
              onTintColor="gold"
              onValueChange={(value) => {
                this.setState({value: value});
              }}
            />
            <Text style={styles.checkBoxText}>Male</Text>

            <CheckBox
              onAnimationType="fill"
              offAnimationType="fade"
              boxType="circle"
              style={styles.checkbox}
              onFillColor="gold"
              onCheckColor="white"
              onTintColor="gold"
              onValueChange={(value) => {
                this.setState({value: value});
              }}
            />
            <Text style={styles.checkBoxText}>Female</Text>
          </View>

          <View style={styles.checkboxContainer2}>
            <CheckBox
              onAnimationType="fill"
              offAnimationType="fade"
              style={styles.checkbox2}
              onFillColor="gold"
              onCheckColor="white"
              onTintColor="gold"
              onValueChange={(value) => {
                this.setState({value: value});
              }}
            />
            <Text style={styles.checkBoxText2}>
              Be the first to know about new arrivals, sales & promos by
              submitting your email! You can opt out at any time.
            </Text>
          </View>

          <TouchableOpacity style={styles.signIn}>
            <Text style={styles.signInText}>Join Now</Text>
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
    margin: 10,
  },
  textInputView: {
    height: 60,
    width: '90%',
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: 'darkgrey',
    fontSize: 16,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputText: {
    paddingHorizontal: 10,
    fontSize: 16,
  },
  image: {
    height: 25,
    width: 25,
  },
  checkboxContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
  checkbox: {
    height: 28,
    width: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: 'gold',
    marginHorizontal: 15,
  },
  checkBoxText: {
    fontSize: 17,
    fontWeight: '400',
    paddingRight: 100,
  },
  checkboxContainer2: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  checkbox2: {
    height: 24,
    width: 24,
    backgroundColor: 'gold',
    borderColor: 'gold',
  },
  checkBoxText2: {
    fontSize: 14,
    fontWeight: '400',
    paddingLeft: 10,
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
    marginTop: 100,
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
