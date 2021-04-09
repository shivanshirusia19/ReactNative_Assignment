import React, {useState} from 'react';
import TrackPlayer, {
  useTrackPlayerProgress,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function ProgressBar() {
  const progress = useTrackPlayerProgress();
  console.log(progress);
  return (
    <View style={styles.progress}>
      <View style={{flex: progress.position, backgroundColor: 'white'}} />
      <View
        style={{
          flex: progress.duration - progress.position,
          backgroundColor: 'grey',
        }}
      />
    </View>
  );
}

function ControlButton({title, onPress}) {
  return (
    <TouchableOpacity style={styles.controlButtonContainer} onPress={onPress}>
      {/* <Text style={styles.controlButtonText}>{title}</Text> */}
      <Image style={styles.icon} source={{uri: title}} />
    </TouchableOpacity>
  );
}

export default function Player(props) {
  const playbackState = usePlaybackState();
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtwork, setTrackArtwork] = useState();
  const [trackArtist, setTrackArtist] = useState('');

  useTrackPlayerEvents(['playback-track-changed'], async (event) => {
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const {title, artist, artwork} = track || {};
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
    }
  });

  const {style, onNext, onPrevious, onTogglePlayback} = props;

  var middleButtonText =
    'https://icelandairwaves.is/wp-content/uploads/2020/10/img_404212.png';

  if (
    playbackState === TrackPlayer.STATE_PLAYING ||
    playbackState === TrackPlayer.STATE_BUFFERING
  ) {
    middleButtonText =
      'https://cdn3.iconfinder.com/data/icons/multimedia-128/24/202_-_Multimedia_pause_icon_circle_button-512.png';
  }

  return (
    <View style={[styles.card, style]}>
      <Image style={styles.cover} source={{uri: trackArtwork}} />
      <ProgressBar />
      <Text style={styles.title}>{trackTitle}</Text>
      <Text style={styles.artist}>{trackArtist}</Text>
      <View style={styles.controls}>
        <ControlButton
          title={'https://static.thenounproject.com/png/289220-200.png'}
          onPress={onPrevious}
        />
        <ControlButton title={middleButtonText} onPress={onTogglePlayback} />
        <ControlButton
          title={
            'https://d29fhpw069ctt2.cloudfront.net/icon/image/39191/preview.png'
          }
          onPress={onNext}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '80%',
    height: '60%',
    elevation: 1,
    borderWidth: 1,
    borderColor: '#2f4f4f',
    borderRadius: 20,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    alignItems: 'center',
    backgroundColor: '#2f4f4f',
  },
  cover: {
    width: 180,
    height: 220,
    marginTop: 40,
    marginBottom: 40,
    backgroundColor: 'grey',
  },
  progress: {
    height: 5,
    width: '90%',
    marginTop: 10,
    flexDirection: 'row',
  },
  title: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: '600',
    color: 'white',
  },
  artist: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
  controls: {
    marginVertical: 20,
    flexDirection: 'row',
  },
  controlButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlButtonText: {
    fontSize: 18,
    textAlign: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    tintColor: 'white',
  },
});
