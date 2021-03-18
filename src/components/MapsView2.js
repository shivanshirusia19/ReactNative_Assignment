/* eslint-disable no-alert */
import React, {Component} from 'react';
import {View, StyleSheet, Image, SafeAreaView} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

// const longitudeDelta = 0.025;
// const latitudeDelta = 0.025;

export default class MapsView2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialRegion: {
        longitude: 79.587769,
        latitude: 24.911005,
        longitudeDelta: 0.0922,
        //   Dimensions.get('window').width / Dimensions.get('window').height,
        latitudeDelta: 0.0421,
      },
      marginBottom: 1,
    };
  }

  componentDidMount() {
    this.handleUserLocation();
  }

  handleUserLocation = () => {
    Geolocation.getCurrentPosition(
      (pos) => {
        //   alert(JSON.stringify(pos));
        this.map.animateToRegion({
          ...this.state.initialRegion,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });

        this.setState({
          ...this.state.initialRegion,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      (err) => {
        console.log(err);
        alert('Something went wrong! Please select location manually');
      },
    );
  };

  onChangeValue = (initialRegion) => {
    alert(JSON.stringify(initialRegion));
    this.setState({
      initialRegion,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={[styles.map, {marginBottom: this.state.marginBottom}]}
            showsUserLocation={true}
            showsMyLocationButton={true}
            initialRegion={this.state.region}
            onRegionChangeComplete={this.onChangeValue}
            ref={(ref) => (this.map = ref)}
            onMapReady={() => this.setState({marginBottom: 0})}
          />
          <View style={styles.iconContainer}>
            <Image
              source={require('../assets/locationPinIcon.png')}
              style={styles.icon}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  iconContainer: {
    top: '50%',
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
  },
  icon: {
    height: 48,
    width: 48,
  },
});
