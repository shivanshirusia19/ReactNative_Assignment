import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';

import FlatList1 from './FlatList1';
import FlatList2 from './FlatList2';
import ModalScreen from './ModalScreen';

export default class AccountScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  onPressEvent = () => {
    this.setState({loading: !this.state.loading});
  };

  changeModalVisible = (bool) => {
    this.setState({loading: bool});
  };

  render() {
    return (
      <>
        <SafeAreaView />
        <View style={styles.headerContainer}>
          <View style={styles.leftContainer}>
            <Text style={styles.welcomeText}>Welcome!</Text>
            <View style={styles.leftContainerOptions}>
              <TouchableOpacity
                style={styles.touchable}
                onPress={this.onPressEvent}>
                <Text style={styles.optionsText}> SIGN IN</Text>
                <Text style={styles.optionsText}>|</Text>
                <Text style={styles.optionsText}>JOIN </Text>
              </TouchableOpacity>
            </View>
            <Modal
              transparent={true}
              animationType={'none'}
              visible={this.state.loading}
              onRequestClose={this.onPressEvent}>
              <ModalScreen changeModalVisible={this.changeModalVisible} />
            </Modal>
          </View>
          <View style={styles.fillView}>
            <Image
              style={styles.userIcon}
              source={require('../assets/userIcon.png')}
            />
          </View>
        </View>
        <ScrollView>
          <FlatList1 />
          <FlatList2 />
          <View style={styles.footerView}>
            <Text style={styles.footerText}>App Version4.0.6(1)</Text>
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: 100,
    flexDirection: 'row',
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  leftContainer: {},
  leftContainerOptions: {
    flexDirection: 'row',
    backgroundColor: '#ffffe0',
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: '600',
    paddingBottom: 6,
  },
  optionsText: {
    padding: 8,
    fontWeight: '500',
  },
  fillView: {
    position: 'absolute',
    backgroundColor: '#ffffe0',
    top: 20,
    height: 60,
    width: 60,
    right: 20,
    borderRadius: 30,
  },
  userIcon: {
    height: 60,
    width: 60,
    tintColor: '#daa520',
  },
  touchable: {
    flexDirection: 'row',
  },
  footerView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  footerText: {
    color: 'grey',
  },
});
