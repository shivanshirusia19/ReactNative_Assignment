// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Icon from 'react-native-vector-icons/FontAwesome';

// import Screen1 from './Screen1';
// import Screen2 from './Screen2';
// import Screen3 from './Screen3';
// import Screen4 from './Screen4';
// import Screen5 from './Screen5';

// const Tab = createBottomTabNavigator();

// function TabRoutes() {
//     return (
//         <Tab.Navigator
//         screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused, color, size }) => {
//               let iconName;
  
//               if (route.name === 'Home') {
//                 iconName = focused ? 'home' : 'home';
//               } else if (route.name === 'Categories') {
//                 iconName = focused ? 'list' : 'list';
//               }
//               else if (route.name === 'My Cart') {
//                 iconName = focused ? 'shopping-cart' : 'shopping-cart';
//               }
//               else if (route.name === 'Wishlist') {
//                 iconName = focused ? 'heart' : 'heart';
//               }
//               else if (route.name === 'Account') {
//                 iconName = focused ? 'user' : 'user';
//               }
  
//               return <Icon name={iconName} size={size} color={color} />;
//             },
//           })}
//           tabBarOptions={{
//            activeTintColor: 'black',
//            inactiveTintColor: 'gray',
//           }}
//         >
//           <Tab.Screen name="Home" component={Screen1} />
//           <Tab.Screen name="Categories" component={Screen2} />
//           <Tab.Screen name="My Cart" component={Screen3} />
//           <Tab.Screen name="Wishlist" component={Screen4} />
//           <Tab.Screen name="Account" component={Screen5} />
//         </Tab.Navigator>
//     );
//   }

// function design() {
//   return (
//     <NavigationContainer>
//       <TabRoutes />
//     </NavigationContainer>
//   );
// }

// export default design;