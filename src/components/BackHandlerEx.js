import React from 'react';
import {View, StyleSheet, Text, BackHandler, Alert} from 'react-native';

class BackHandlerEx extends React.Component {
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.onBackPress,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  onBackPress = () => {
    Alert.alert('Exit App', 'Do you really want to exit?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        title: 'OK',
        onPress: () => {
          BackHandler.exitApp();
        },
      },
    ]);
    return 'true';
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>BackHandler Example</Text>
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
  text: {
    fontSize: 20,
    fontWeight: '500',
  },
});

export default BackHandlerEx;
