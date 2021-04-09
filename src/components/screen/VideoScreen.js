/* eslint-disable no-alert */
import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import VideoPlayer from 'react-native-video-player';

export default class VideoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isBuffer: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <VideoPlayer
          video={{
            uri:
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          }}
          onLoad={(val) => {
            this.setState({
              isBuffer: false,
            });
          }}
          onEnd={() => {
            alert('Video Completed!');
          }}
          onBuffer={(val) => {
            this.setState({
              isBuffer: true,
            });
          }}
          //   videoHeight={Dimensions.get('screen').height}
          videoHeight={300}
          videoWidth={Dimensions.get('window').width}
          thumbnail={{uri: 'https://i.picsum.photos/id/866/1600/900.jpg'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  bufferContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
