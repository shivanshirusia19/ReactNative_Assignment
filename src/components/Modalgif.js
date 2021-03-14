import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Button,
  Modal,
  //ActivityIndicator,
  Image,
} from 'react-native';

export default class Modalgif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  toggleModal = () => {
    setTimeout(() => {
      this.setState({loading: !this.state.loading});
    }, 3000);
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.toggleModal}
          title="Click Here"
          //color="#4f8080"
          backgroundColor="#4f8080"
          underlayColor="#cccccc"
        />
        <Modal
          transparent={true}
          animationType={'none'}
          visible={this.state.loading}
          onRequestClose={() => {
            console.log('close modal');
          }}>
          <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper}>
              {/* <ActivityIndicator
                animating={this.state.loading}
                size="large"
                color="black"
              /> */}
              {/* <Image
                style={styles.gifimage}
                source={require('../assets/aiGif.gif')}
              /> */}
              <Image
                style={styles.gifimage}
                source={require('../assets/gif2.gif')}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 50,
    justifyContent: 'center',
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    //backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  gifimage: {
    height: 200,
    width: 200,
  },
});
