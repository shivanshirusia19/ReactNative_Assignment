import React, {Component} from 'react';
import {
  View,
  Text,
  PanResponder,
  Animated,
  Dimensions,
  StyleSheet,
} from 'react-native';

export default class DraggableBall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: this.state.pan.x,
            dy: this.state.pan.y,
          },
        ],
        {useNativeDriver: false},
      ),
      onPanResponderRelease: (e, gesture) => {},
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.draggableContainer}>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[this.state.pan.getLayout(), styles.circle]}>
            <Text style={styles.text}>Drag the Circle!</Text>
          </Animated.View>
        </View>
      </View>
    );
  }
}

const circle_radius = 50;
const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 22,
  },
  draggableContainer: {
    position: 'absolute',
    top: window.height / 2 - circle_radius,
    left: window.width / 2 - circle_radius,
  },
  circle: {
    backgroundColor: 'white',
    width: circle_radius * 2,
    height: circle_radius * 2,
    borderRadius: circle_radius,
    borderColor: 'black',
    borderWidth: 8,
    shadowColor: 'black',
    shadowRadius: 16,
    shadowOpacity: 0.58,
    shadowOffset: {width: 0, height: 12},
    elevation: 24,
  },
});
