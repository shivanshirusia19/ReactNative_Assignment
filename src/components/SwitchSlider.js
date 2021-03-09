// import React, { useState } from "react";
// import { View, Switch, Text, StyleSheet } from "react-native";
// import Slider from '@react-native-community/slider';

// const SwitchSlider = () => {
//   const [isEnabled, setIsEnabled] = useState(false);
//   // const [value, setValue] = useState(0);
//   const [value, setValue] = useState(1);
//   const toggleSwitch = () => {
//     setIsEnabled(previousState => !previousState);
//     setValue(0);
//   }

//   return (
//     <View style={styles.container}>
//       <Switch
//       style={styles.switch}
//         trackColor={{ false: "#767577", true: "#81b0ff" }}
//         thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
//         ios_backgroundColor="#3e3e3e"
//         onValueChange={toggleSwitch}
//         value={isEnabled}
//       />
//       {isEnabled? (
//            <View style={styles.sliderContainer}>
//            <Slider
//              style={styles.slider}
//              minimumValue={0}
//              maximumValue={10}
//             //  value={value}
//             value={0}
//              minimumTrackTintColor="gray"
//              // disabled
//              step={1}
//              maximumTrackTintColor="blue"
//              //onValueChange={setValue}
//              onSlidingComplete={setValue}
//            />
//            <Text style={styles.text}>{value}</Text>
//          </View>
//       ) : null }
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   switch: {
//     position: 'absolute',
//     top: 300,
//     transform: [{scale: 1.5}]
//   },
//   sliderContainer: {
//     marginTop: 30
//   },
//   slider: {
//     width: 200,
//     height: 50,
//   },
//   text: {
//     color: 'black',
//     textAlign: 'center',
//     fontSize: 20
//   }
// });

// export default SwitchSlider;