import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import moment from 'moment';

export default class RenderData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: false,
      countdown: moment.duration().add(this.props.time),
    };
  }

  componentDidMount() {
    this.timer();
  }

  timer = () => {
    const a = setInterval(() => {
      let {countdown} = this.state;
      if (countdown <= 0) {
        clearInterval(a);
        this.setState({isExpired: true});
      } else {
        countdown = countdown.subtract(1, 's');
        this.setState({
          days: countdown.days(),
          hours: countdown.hours(),
          minutes: countdown.minutes(),
          seconds: countdown.seconds(),
        });
      }
    }, 1000);
  };

  render() {
    const {id, title, desc} = this.props;
    return (
      <View style={styles.container}>
        <View style={this.state.isExpired ? styles.box : styles.expiredBox}>
          <Text style={styles.expiredText}>Expired</Text>
        </View>
        <View style={styles.leftPart}>
          <Text style={styles.title}>
            {id}. {title}
          </Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
        <View style={styles.rightPart}>
          <Text style={styles.timer}>
            {this.state.days} : {this.state.hours} : {this.state.minutes} :{' '}
            {this.state.seconds}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#5f9ea0',
    margin: 10,
    height: 170,
  },
  expiredBox: {
    position: 'absolute',
    opacity: 0,
  },
  box: {
    backgroundColor: 'lightgrey',
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 1,
  },
  expiredText: {
    top: 75,
    fontSize: 30,
    alignSelf: 'center',
  },
  leftPart: {
    justifyContent: 'center',
    width: '65%',
    padding: 10,
  },
  rightPart: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
    width: '35%',
    height: '30%',
    padding: 10,
  },
  title: {
    marginBottom: 10,
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 16,
    color: 'white',
  },
  timer: {
    fontSize: 14,
    color: 'white',
  },
});
