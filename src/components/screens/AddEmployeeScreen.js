import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {addEmployee} from '../database/EmployeeDatabase';

export default class AddEmployeeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      designation: '',
      salary: '',
      data: false,
    };
  }

  showAlert = () => {
    Alert.alert('Alert', 'Invalid Input type', [
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed'),
      },
    ]);
  };

  onButtonPress = () => {
    const {id, name, designation, salary} = this.state;
    let alphacheck = /^[a-z\d\-_\s]+$/i;
    let numcheck = /^[0-9]*$/;
    let check = true;

    if (id === '' || !numcheck.test(id)) {
      check = false;
      this.showAlert();
    } else if (!alphacheck.test(name) || !alphacheck.test(designation)) {
      check = false;
      this.showAlert();
    } else if (!numcheck.test(salary) || salary > 500000) {
      check = false;
      this.showAlert();
    }

    if (check) {
      addEmployee(id, name, designation, salary);
      this.props.navigation.navigate('HomeScreen', {check});
    }
  };

  render() {
    return (
      <>
        <SafeAreaView style={styles.safeareaview} />
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Add Employees</Text>
          <TouchableOpacity
            style={styles.crossContainer}
            onPress={() => {
              this.props.navigation.navigate('HomeScreen');
            }}>
            <Text style={styles.cross}>X</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <TextInput
            style={styles.searchTextinput}
            placeholder="Enter Employee Id"
            value={this.state.id}
            onChangeText={(id) => {
              this.setState({
                id,
              });
            }}
          />
          <TextInput
            style={styles.searchTextinput}
            placeholder="Enter Employee Name"
            value={this.state.name}
            onChangeText={(name) => {
              this.setState({
                name,
              });
            }}
          />
          <TextInput
            style={styles.searchTextinput}
            placeholder="Enter Employee Designation"
            value={this.state.designation}
            onChangeText={(designation) => {
              this.setState({
                designation,
              });
            }}
          />
          <TextInput
            style={styles.searchTextinput}
            placeholder="Enter Employee Salary"
            value={this.state.salary}
            onChangeText={(salary) => {
              this.setState({
                salary,
              });
            }}
          />

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.onButtonPress()}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  safeareaview: {
    backgroundColor: '#5f9ea0',
  },
  headerContainer: {
    height: '8%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    //flexDirection: 'row',
    backgroundColor: '#5f9ea0',
  },
  headerTitle: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  crossContainer: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'white',
    backgroundColor: 'white',
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cross: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#5f9ea0',
  },
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    //justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  searchTextinput: {
    height: 50,
    width: '85%',
    fontSize: 18,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 13,
    textAlign: 'center',
    marginVertical: 15,
  },
  buttonContainer: {
    height: 60,
    width: '60%',
    backgroundColor: '#5f9ea0',
    borderWidth: 1,
    borderColor: '#5f9ea0',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
