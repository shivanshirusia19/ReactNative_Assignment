import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
const DATA = [
  {
    id: '1',
    title: 'Track Order',
    icon:
      'https://icons.iconarchive.com/icons/icons8/ios7/256/Maps-Location-icon.png',
  },
  {
    id: '2',
    title: 'Size Chart',
    icon: 'https://image.flaticon.com/icons/png/512/25/25390.png',
  },
  {
    id: '3',
    title: 'Notifications',
    icon: 'https://image.flaticon.com/icons/png/128/3602/3602145.png',
  },
  {
    id: '4',
    title: 'Store Location',
    icon:
      'https://cdn3.iconfinder.com/data/icons/web-and-user-interface-icons/512/38-512.png',
  },
];

export default class FlatList1 extends Component {
  renderItem = ({item}) => {
    return (
      <View style={styles.box}>
        <View style={styles.leftBox}>
          <Image source={{uri: item.icon}} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
        {/* <View style={styles.arrowIcon}> */}
        <TouchableOpacity>
          <Icon name={'chevron-right'} size={16} color={'grey'} />
        </TouchableOpacity>
      </View>
    );
  };

  itemSeparator = () => <View style={styles.separator} />;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={(item) => this.renderItem(item)}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={this.itemSeparator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 15,
  },
  image: {
    width: 25,
    height: 25,
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  leftBox: {
    flexDirection: 'row',
  },
  title: {
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: '500',
  },
  separator: {
    height: 0.5,
    backgroundColor: 'lightgrey',
    marginLeft: 10,
    marginRight: 10,
  },
  arrowIcon: {
    justifyContent: 'flex-end',
  },
});
