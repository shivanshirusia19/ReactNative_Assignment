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

import {DATA} from './DataItem';

export default class FlatList2 extends Component {
  renderItem = ({item}) => {
    return (
      <View style={styles.box}>
        <View style={styles.leftBox}>
          <Image source={{uri: item.icon}} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>

        {item.id === '5' ? (
          <View style={styles.flagView}>
            <Image
              source={{
                uri:
                  'https://img.flaticon.com/icons/png/512/206/206626.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF',
              }}
              style={styles.image}
            />
            <Text style={styles.flagText}>USD</Text>
          </View>
        ) : null}

        {item.id === '6' ? (
          <View style={styles.engView}>
            <Text style={styles.flagText}>ENG</Text>
          </View>
        ) : null}

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
  flagView: {
    flexDirection: 'row',
    paddingLeft: 120,
  },
  flagText: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '500',
    paddingHorizontal: 15,
  },
  engView: {
    paddingLeft: 130,
  },
});
