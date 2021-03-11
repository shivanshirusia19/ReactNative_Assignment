// import React, {Component} from 'react';
// import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
// import Clipboard from '@react-native-clipboard/clipboard';

// class ClipboardEx extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       clipboardText: '',
//       textInputText: '',
//     };
//   }

//   setTextIntoClipboard = async () => {
//     await Clipboard.setString(this.state.textInputText);
//   };

//   getTextFromClipboard = async () => {
//     var textHolder = await Clipboard.getString();
//     this.setState({
//       clipboardText: textHolder,
//     });
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <TextInput
//           style={styles.textInput}
//           placeholder="Enter Text Here"
//           onChangeText={(value) => this.setState({textInputText: value})}
//         />
//         <Button
//           color="#48d1cc"
//           title="Copy TextInput Text Into Clipboard"
//           onPress={this.setTextIntoClipboard}
//         />
//         <Text> </Text>
//         <Button
//           color="#48d1cc"
//           title="Paste the Copied Text"
//           onPress={this.getTextFromClipboard}
//         />
//         <Text style={styles.text}>
//           Display Text: {this.state.clipboardText}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 20,
//   },
//   textInput: {
//     textAlign: 'center',
//     height: 40,
//     width: '90%',
//     borderWidth: 1,
//     borderColor: '#48d1cc',
//     borderRadius: 8,
//     marginBottom: 20,
//   },
//   text: {
//     fontSize: 18,
//     margin: 20,
//   },
// });

// export default ClipboardEx;
