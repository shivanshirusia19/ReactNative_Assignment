// import React from 'react';
// import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';

// const dataSource = [
//     { 
//         image: require('../assets/image5.jpeg'),
//         name: 'Urban',
//         desc: 'Red Mix Scarf Printed Full Sleeves Shirt',
//         price: 'USD 23'
//     },
//     { 
//         image: require('../assets/image6.jpeg'),
//         name: 'HERE&NOW',
//         desc: 'Men Maroon Regular Fit Solid Casual Shirt',
//         price: 'USD 23'
//     },
//     { 
//         image: require('../assets/image7.jpeg'),
//         name: 'H&M',
//         desc: 'Men Blue Solid Sweatshirt',
//         price: 'USD 23'
//     },
//     { 
//         image: require('../assets/image8.jpeg'),
//         name: 'HERE&NOW',
//         desc: 'Men White Regular Fit Solid Casual Shirt',
//         price: 'USD 23'
//     },
// ];

// function Body(){

//     return(
//         <ScrollView>
//             <View style={styles.bodyContainer}>
//                 {dataSource.map( (item, index) => (
//                     <View key={index} style={styles.container}>
//                         <View style={styles.imageContainer}>
//                             <View style={styles.newView}>
//                                 <Text style={styles.newText}>NEW</Text>
//                             </View>
//                             <Image source={item.image} style={styles.image} />
//                             <TouchableOpacity style={styles.like}>
//                                {/* <Icon name={'heart'} /> */}
//                                <Image source={require('../assets/heartIcon.png')} style={styles.likeImage} />
//                             </TouchableOpacity>
//                         </View>
//                         <View>
//                             <Text style={styles.title}>{item.name}</Text>
//                             <Text style={styles.desc}>{item.desc}</Text>
//                             <Text style={styles.price}>{item.price}</Text>
//                         </View>
//                     </View>
//                 ))}
//             </View>
//         </ScrollView>
//     )
// }

// const styles = StyleSheet.create({
//     bodyContainer: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         alignItems: 'flex-start'
//     },
//     container: {
//         width: '47%',
//         marginLeft: '2.5%',
//         zIndex: 0,
//         marginVertical: 10
//     },
//     imageContainer: {
//         position: 'relative',
//         marginBottom: 10,
//     },
//     image: {
//         width: '100%',
//         height: 250,
//         resizeMode: 'cover'
//     },
//     newView: {
//         padding: 4,
//         zIndex: 1,
//         position: 'absolute',
//         backgroundColor: 'green'
//     },
//     newText: {
//         color: 'white',
//         fontSize: 11,
//     },
//     like: {
//         padding: 4,
//         position: 'absolute',
//         top: 4,
//         right: 4,
//         backgroundColor: 'white',
//         borderRadius: 25,
//     },
//     likeImage:{
//         height: 20,
//         width: 20,
//     },
//     title: {
//         marginBottom: 5,
//         fontSize: 15,
//         fontWeight: '600'
//     },
//     desc: {
//       marginBottom: 5,
//       fontSize: 15,
//     },
//     price: {
//         fontSize: 16,
//        fontWeight: '600'
//     }
// })

// export default Body;