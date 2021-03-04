import React, { Component } from 'react';
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native';

//const image = { uri: "https://reactjs.org/logo-og.png" };

export default class Task3 extends Component {
  render() {


    return (
        <View style={styles.container}>
            <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.image}
            />
            
            {/* Image with custom placeholder content */}
            <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.image}
            PlaceholderContent={<ActivityIndicator size="large" color="black"/>}
            />
            </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
      padding:10,
      margin: 10,
    width: 100, 
    height: 100 
  }
})