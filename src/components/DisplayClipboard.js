// import React, {Component} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import Clipboard from '@react-native-clipboard/clipboard';

// export default class DisplayClipboard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       clipboardText: '',
//     };
//   }

//   componentDidMount() {
//     (async () => {
//       var textHolder = await Clipboard.getString();
//       this.setState({
//         clipboardText: textHolder,
//       });
//     })();
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}>Text copied from Clipboard is: </Text>
//         <Text style={styles.text}>{this.state.clipboardText}</Text>
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
//   text: {
//     fontSize: 18,
//     margin: 20,
//   },
// });
