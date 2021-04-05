import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const DisplayNotes = ({id, title, desc, openUpdateScreen, removeNote}) => {
  return (
    <TouchableOpacity
      key={id.toString()}
      style={styles.container}
      onPress={() => openUpdateScreen('updateScreen', id)}
      onLongPress={() => removeNote(id)}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.descText}>{desc}</Text>
    </TouchableOpacity>
  );
};

export default DisplayNotes;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingVertical: 20,
  },
  titleText: {
    fontSize: 20,
    color: 'black',
  },
  descText: {
    color: 'grey',
  },
});
