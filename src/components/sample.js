import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Animated,
} from 'react-native';

const imageArray = [
  '../assets/fitnessImage2.jpeg',
  '../assets/powerLifting1.jpeg',
  '../assets/yoga1.jpeg',
];

export default class sample extends Component {
  state = {
    active: 0,
  };

  change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== this.state.active) {
      this.setState({active: slide});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          onScroll={this.change}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.imageContainer}>
            <Animated.View
              style={[
                styles.imageCard,
                {
                  opacity: this.state.fadeAnimation,
                },
              ]}>
              {/* <View style={styles.imageCard}> */}
              <Image
                style={styles.fitnessImageStyle}
                source={require('../assets/fitnessImage2.jpeg')}
              />
              <Text style={styles.title}>FITNESS</Text>
              <Text style={styles.desc}>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt,
              </Text>
            </Animated.View>
            {/* </View> */}
          </View>

          <View style={styles.imageContainer}>
            <View style={styles.imageCard}>
              <Image
                style={styles.fitnessImageStyle}
                source={require('../assets/fitnessImage2.jpeg')}
              />
              <Text style={styles.title}>FITNESS</Text>
              <Text style={styles.desc}>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt,
              </Text>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <View style={styles.imageCard}>
              <Image
                style={styles.fitnessImageStyle}
                source={require('../assets/fitnessImage2.jpeg')}
              />
              <Text style={styles.title}>FITNESS</Text>
              <Text style={styles.desc}>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt,
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.pagination}>
          {imageArray.map((item, index) => (
            <Text
              key={index}
              style={
                index === this.state.active
                  ? styles.pagingActiveText
                  : styles.pagingText
              }>
              ⬤
            </Text>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0ffff',
    paddingHorizontal: 40,
  },
  imageContainer: {
    backgroundColor: 'lightgrey',
    height: 520,
    width: 310,
    borderRadius: 60,
    alignSelf: 'center',
    //marginHorizontal: 20,
    marginRight: 25,
    //marginLeft: 10,
  },
  imageCard: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 500,
    width: 290,
    borderRadius: 50,
    shadowColor: 'grey',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  fitnessImageStyle: {
    height: 280,
    width: 200,
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    color: '#008080',
    paddingTop: 15,
  },
  desc: {
    fontSize: 11,
    paddingVertical: 20,
    paddingHorizontal: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 250,
    left: 120,
    alignSelf: 'center',
  },
  pagingText: {
    margin: 10,
    color: 'white',
    height: 20,
    width: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#008080',
  },
  pagingActiveText: {
    margin: 10,
    fontSize: 20,
    color: '#008080',
    marginTop: 5,
  },
});
