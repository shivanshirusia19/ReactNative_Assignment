import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import BottomNavig from './src/components/navigation/Index';

const App = () => {
  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <BottomNavig />
      </View>
    </>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
