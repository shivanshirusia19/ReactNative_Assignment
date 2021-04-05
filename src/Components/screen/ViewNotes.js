import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  Alert,
} from 'react-native';
import DisplayNotes from './DisplayNotes';
import {inject, observer} from 'mobx-react';

@inject('notesStore')
@observer
export default class ViewNotes extends Component {
  constructor(props) {
    super(props);
    // this.navigation = this.props.navigation;
  }

  renderItem = ({item}) => {
    return (
      <DisplayNotes
        key={item.id.toString()}
        id={item.id}
        title={item.title}
        desc={item.desc}
        openUpdateScreen={this.openUpdateScreen}
        removeNote={this.removeNote}
      />
    );
  };

  openUpdateScreen = (title, id) => {
    this.props.navigation.navigate('AddNotes', {
      screenType: 'updateScreen',
      id,
    });
  };

  removeNote = (id) => {
    Alert.alert('Delete Item', 'Are you sure you want to delete this note?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => this.props.notesStore.removeNote(id),
      },
    ]);
  };

  render() {
    return (
      <>
        <SafeAreaView style={styles.headerContainer} />
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Simple Note Taker</Text>
        </View>

        <View style={styles.container}>
          {this.props.notesStore.getAllNotes.length === 0 ? (
            <View style={styles.titleContainer}>
              <Text style={styles.title}>You do not have any Notes</Text>
            </View>
          ) : (
            <FlatList
              data={this.props.notesStore.getAllNotes}
              keyExtractor={(item) => item.id}
              renderItem={this.renderItem}
            />
          )}

          {/* Footer Button */}
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => {
              this.props.navigation.navigate('AddNotes', {
                screenType: 'addScreen',
              });
            }}>
            <View style={styles.iconView}>
              <Image
                source={require('../../assets/addIcon1.png')}
                style={styles.iconImage}
              />
              <Text style={styles.iconText}>Add New Note</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: '7%',
    backgroundColor: '#60DAC4',
  },
  header: {
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: '500',
    color: '#444',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
  iconContainer: {
    width: 180,
    height: 50,
    backgroundColor: '#60DAC4',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    right: 20,
  },
  iconView: {
    flexDirection: 'row',
  },
  iconImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  iconText: {
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: '500',
  },
});
