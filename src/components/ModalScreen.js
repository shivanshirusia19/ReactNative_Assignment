import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import SignInScreen from './SignInScreen';
import JoinScreen from './JoinScreen';

export default class ModalScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectSignin: true,
      selectJoin: false,
    };
  }

  closeModal = (bool, data) => {
    this.props.changeModalVisible(bool);
  };

  onPressSignInEvent = () => {
    this.setState({
      selectSignin: true,
      selectJoin: false,
    });
  };

  onPressJoinEvent = () => {
    this.setState({
      selectSignin: false,
      selectJoin: true,
    });
  };

  render() {
    return (
      <TouchableOpacity disabled={true} style={StyleSheet.container}>
        <View style={styles.modal}>
          <TouchableOpacity
            style={styles.crossIcon}
            onPress={() => this.closeModal(false, 'Cancel')}>
            <Icon name={'times'} size={30} color={'black'} />
          </TouchableOpacity>
          <View style={styles.header}>
            <TouchableOpacity
              style={
                this.state.selectSignin
                  ? styles.headerLine
                  : styles.nonheaderLine
              }
              onPress={() => this.onPressSignInEvent()}>
              <Text style={styles.headerText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.selectJoin ? styles.headerLine : styles.nonheaderLine
              }
              onPress={() => this.onPressJoinEvent()}>
              <Text style={styles.headerText}>Join</Text>
            </TouchableOpacity>
          </View>

          {this.state.selectJoin && !this.state.selectSignin ? (
            <JoinScreen />
          ) : (
            <SignInScreen />
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    width: '100%',
    height: '95.5%',
    paddingTop: 60,
    backgroundColor: 'white',
    borderRadius: 10,
    //paddingHorizontal: 20,
  },
  crossIcon: {
    alignItems: 'flex-end',
    paddingHorizontal: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  headerText: {
    fontSize: 26,
    fontWeight: '600',
    paddingBottom: 15,
    paddingHorizontal: 10,
  },
  headerLine: {
    borderBottomWidth: 5,
    borderBottomColor: 'gold',
  },
  nonheaderLine: {
    borderBottomWidth: 5,
    borderBottomColor: 'white',
  },
});
