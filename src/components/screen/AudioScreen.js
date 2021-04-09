import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import TrackPlayer from 'react-native-track-player';

import Player from '../component/Player';
import playlistData from '../data/playlist.json';

export default class AudioScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setup();
  }
  async setup() {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ],
    });
    await TrackPlayer.add(playlistData);
    await TrackPlayer.play();
  }

  async togglePlayback() {
    const playbackState = await TrackPlayer.getState();
    if (playbackState === TrackPlayer.STATE_PAUSED) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Player
          onNext={skipToNext}
          style={styles.player}
          onPrevious={skipToPrevious}
          onTogglePlayback={this.togglePlayback}
        />
      </View>
    );
  }
}

async function skipToNext() {
  try {
    await TrackPlayer.skipToNext();
  } catch (_) {}
}

async function skipToPrevious() {
  try {
    await TrackPlayer.skipToPrevious();
  } catch (_) {}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
  },
  description: {
    width: '80%',
    marginTop: 20,
    textAlign: 'center',
  },
  player: {
    marginTop: 40,
  },
  state: {
    marginTop: 20,
  },
});
