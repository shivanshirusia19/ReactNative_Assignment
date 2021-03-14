import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SectionList,
  //Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
//import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const DATA = require('./DataJson.json');

export default class Sectionlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
      // onChangeText: '',
    };
  }

  Item = title => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <CheckBox
          onAnimationType="fill"
          offAnimationType="fade"
          boxType="circle"
          style={styles.checkbox}
          onFillColor="#4f8080"
          onCheckColor="white"
          onTintColor="#4f8080"
          onValueChange={value => {
            this.setState({value: value});
          }}
        />
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          style={styles.viewContainer1}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['rgba(26,36,68,0.9)', 'rgba(0,73,78,0.9)']}>
          <View style={styles.viewContainer2}>
            <Text style={styles.textContainer}> Store Selected:</Text>
            <Text style={styles.textContainerValue}> Coop MÖlndal Åby</Text>
            <View style={styles.crossView}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  style={styles.crossicon}
                  source={require('../assets/crossIcon.jpeg')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TextInput style={styles.textInput} />
        </LinearGradient>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => this.Item(item)}
          renderSectionHeader={({section}) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.header}>{section.title}</Text>
            </View>
          )}
        />
        {this.state.value ? (
          // <Button color="#4f8080" title="CONTINUE" />
          <TouchableOpacity>
            <View style={styles.buttonView}>
              <Text style={styles.button}>CONTINUE</Text>
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer1: {
    paddingTop: 15,
    padding: 10,
    height: '15%',
    backgroundColor: '#4f8080',
    shadowColor: 'white',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
  },
  viewContainer2: {
    flex: 2,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  textContainer: {
    //paddingTop: 40,
    fontSize: 16,
    color: 'lightgrey',
  },
  textContainerValue: {
    //paddingTop: 38,
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  // crossView: {
  //   justifyContent: 'flex-end',
  //   alignItems: 'flex-end',
  // },
  crossicon: {
    height: 20,
    width: 20,
    borderRadius: 50,
    //marginTop: 40,
    marginLeft: 80,
  },
  textInput: {
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    height: 40,
    width: '100%',
    paddingBottom: 5,
    marginBottom: 3,
  },
  item: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15.5,
    borderBottomWidth: 1,
    borderBottomColor: 'whitesmoke',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    textTransform: 'capitalize',
    //padding: 7,
  },
  sectionHeader: {
    padding: 5,
    borderBottomWidth: 0.8,
    borderBottomColor: 'lightgrey',
    backgroundColor: 'white',
  },
  header: {
    fontSize: 22,
    backgroundColor: '#fff',
    fontWeight: 'bold',
    paddingVertical: 6,
    paddingLeft: 8,
    textTransform: 'capitalize',
  },
  checkbox: {
    height: 20,
    width: 20,
  },
  buttonView: {
    padding: 10,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#4f8080',
    height: 40,
    width: 370,
    marginBottom: 25,
    alignSelf: 'center',
  },
  button: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
  },
});
