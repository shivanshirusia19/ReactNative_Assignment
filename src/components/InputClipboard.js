import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Text,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

export default class InputClipboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  setTextIntoClipboard = async () => {
    await Clipboard.setString(this.state.text);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Enter text and press long for copy</Text>
        <TouchableOpacity onLongPress={() => this.setTextIntoClipboard()}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Text Here"
            onChangeText={(text) => {
              this.setState({text});
            }}
          />
        </TouchableOpacity>
        <Button
          //   color="#48d1cc"
          title="Copy TextInput Text Into Clipboard"
          onPress={() => this.props.navigation.navigate('Display')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  textInput: {
    textAlign: 'center',
    height: 40,
    width: 300,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 18,
  },
  text: {
    fontSize: 18,
    margin: 20,
  },
});
