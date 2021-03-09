import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {WebView} from 'react-native-webview';

// ...
export default class Web_View extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: false};
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <WebView
          onLoadStart={() => {
            this.setState({
              isLoading: true,
            });
          }}
          onLoadEnd={() => {
            this.setState({
              isLoading: false,
            });
          }}
          onNavigationStateChange={(a) => console.log(a)}
          source={{uri: 'https://google.com'}}
        />
        {this.state.isLoading ? (
          <View
            style={{
              flex: 1,
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}>
            <ActivityIndicator
              size={'large'}
              color={'gray'}
              animating={true}
              style={{alignSelf: 'center'}}
            />
          </View>
        ) : null}
      </SafeAreaView>
    );
  }
}
