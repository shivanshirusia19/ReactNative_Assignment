import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {
  getAllEmployee,
  deleteAllEmployee,
  sortEmployee,
  searchEmployee,
} from '../database/EmployeeDatabase';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      empData: getAllEmployee(),
      searchAsc: true,
    };
  }

  onPressSort = () => {
    this.state.searchAsc
      ? this.setState({
          empData: sortEmployee(this.state.searchAsc),
          searchAsc: !this.state.searchAsc,
        })
      : this.setState({
          empData: sortEmployee(this.state.searchAsc),
          searchAsc: !this.state.searchAsc,
        });
  };

  renderSearchSort = (boolVal) => {
    return (
      <View style={styles.searchHeaderContainer}>
        <View style={styles.searchHeader}>
          <TextInput
            style={styles.searchTextinput}
            placeholder="Search Employee"
            value={this.state.searchValue}
            onChangeText={(val) => {
              this.setState({
                searchValue: val,
              });
              if (!val) {
                this.setState({
                  empData: getAllEmployee(),
                  searchValue: '',
                });
              }
            }}
          />
          <TouchableOpacity
            style={styles.sortIconContainer}
            disabled={boolVal}
            onPress={() => {
              if (this.state.searchValue) {
                this.setState({
                  empData: searchEmployee(this.state.searchValue),
                });
              } else {
                this.setState({
                  empData: getAllEmployee(),
                  searchValue: '',
                });
              }
            }}>
            <Image
              style={styles.deleteIcon}
              source={require('../../assets/searchIcon.png')}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          disabled={boolVal}
          onPress={() => {
            this.onPressSort();
          }}>
          {this.state.searchAsc ? (
            <Image
              style={styles.sortIcon}
              source={require('../../assets/sortAscIcon.png')}
            />
          ) : (
            <Image
              style={styles.sortIcon}
              source={require('../../assets/sortDescIcon.png')}
            />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <>
        <SafeAreaView style={styles.safeareaview} />
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Employees List</Text>
        </View>

        <View style={styles.container}>
          {(this.state.empData.length > 2 && this.state.searchValue === '') ||
          this.state.searchValue !== ''
            ? this.renderSearchSort(false)
            : this.renderSearchSort(true)}

          <View>
            <FlatList
              data={this.state.empData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                console.log(item);
                return (
                  <View style={styles.detailsContainer}>
                    <Text style={styles.nameText}>{item.name}</Text>
                    <Text style={styles.detailsText}>EmpID: {item.id}</Text>
                    <Text style={styles.detailsText}>
                      Designation: {item.designation}
                    </Text>
                    <Text style={styles.detailsText}>
                      Salary: {item.salary}
                    </Text>
                  </View>
                );
              }}
            />
          </View>

          <TouchableOpacity
            style={[styles.iconConatiner, styles.leftIconContainer]}
            onPress={() => {
              deleteAllEmployee();
              this.setState({
                empData: getAllEmployee(),
              });
            }}>
            <Image
              style={styles.deleteIcon}
              source={require('../../assets/delete.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.iconConatiner, styles.rightIconContainer]}
            onPress={() => {
              this.props.navigation.navigate('AddEmployeeScreen');
            }}>
            <Image
              style={styles.addIcon}
              source={require('../../assets/addIcon.png')}
            />
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
    backgroundColor: '#5f9ea0',
  },
  headerTitle: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  searchHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchHeader: {
    flexDirection: 'row',
    borderWidth: 1,
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: '#5f9ea0',
    borderColor: 'white',
    borderRadius: 13,
    alignItems: 'center',
    width: '78%',
  },
  searchTextinput: {
    height: 50,
    width: '85%',
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderTopLeftRadius: 13,
    borderBottomLeftRadius: 13,
    marginRight: 5,
  },
  sortIcon: {
    width: 40,
    height: 40,
    tintColor: '#5f9ea0',
    marginTop: 10,
    marginHorizontal: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
  },
  detailsContainer: {
    marginVertical: 20,
    alignSelf: 'center',
    height: 120,
    width: '90%',
    backgroundColor: '#5f9ea0',
    borderColor: '#5f9ea0',
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  detailsText: {
    fontSize: 18,
    color: 'white',
    paddingVertical: 1,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: 1,
  },
  iconConatiner: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: '#5f9ea0',
    borderWidth: 1,
    backgroundColor: '#5f9ea0',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    margin: 30,
  },
  deleteIcon: {
    width: 35,
    height: 35,
    tintColor: 'white',
    alignSelf: 'center',
  },
  leftIconContainer: {
    left: 0,
  },
  rightIconContainer: {
    right: 0,
  },
  addIcon: {
    width: 45,
    height: 45,
    tintColor: 'white',
  },
});
