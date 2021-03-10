// import React from 'react';
// import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';

// import Body from './Body';

// const items = [ "Polo Shirts", "Dress Shirts", "Shorts", "T-shirts & V-necks", "Jeans"];

// function HomeScreen(){

//     return(
//         <View style={styles.container}>
//             <View style={styles.homeTab}>
//                 <View style={styles.totalItem}> 
//                     <Text style={styles.box}> 195 items </Text>
//                 </View>

//                 <View style={styles.sort}>
//                     <TouchableOpacity>
//                         <Image 
//                         style={styles.sorticon}
//                         source={require('../assets/sortIcon.png')} />
//                     </TouchableOpacity>
//                     <TouchableOpacity>
//                         <View>
//                             <Text style={styles.text}>SORT</Text>
//                         </View>
//                     </TouchableOpacity>

//                     <View>
//                         <Text style={styles.box}> | </Text>
//                     </View>
//                     <TouchableOpacity>
//                         <Image 
//                         style={styles.filtericon}
//                         source={require('../assets/filterIcon.png')} />
//                     </TouchableOpacity>
//                     <TouchableOpacity>
//                         <View>
//                             <Text style={styles.text}>FILTER</Text>
//                         </View>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//             <View>
//             <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//                 {items.map( (item,index) => (
//                     <TouchableOpacity key={index}>
//                         <View style={styles.itemsContainer}>
//                             <Text style={styles.itemsText}>{item} </Text>
//                         </View>
//                     </TouchableOpacity>
//                 ))}
//             </ScrollView>
//         </View>
//         <Body />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     homeTab: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'row',
//         padding: 15,
//         borderBottomWidth: 1,
//         borderBottomColor: 'lightgrey'
//     },
//     totalItem: {
//         flex: 5
//     },
//     sort: {
//         flex: 4,
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center'
//     },
//     sorticon: {
//         height: 25,
//         width: 25
//     },
//     filtericon: {
//         height: 20,
//         width: 20
//     },
//     text: {
//         fontSize: 18
//     },
//     box: {
//         color: 'darkgrey'
//     },
//     itemsText: {
//         fontWeight: "500",
//         fontSize: 14,
//         paddingHorizontal: 10
//     },
//     itemsContainer: {
//         padding: 10,
//         margin: 5,
//         marginTop: 15,
//         backgroundColor: 'lightgrey',
//         paddingHorizontal: 10,
//         borderRadius: 10,
//     }
// });

// export default HomeScreen;