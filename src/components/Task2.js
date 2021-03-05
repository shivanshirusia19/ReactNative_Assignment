import React, { Component} from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Task2 extends Component {
   
    constructor(props){
        super(props)
        this.state = { value: "", bgcolor: ""}
      }

   
   render() {
    const {value,bgcolor} = this.state

      return (
         <View style = {{flex: 1, backgroundColor: '#'+value}}>
            <TextInput style = {styles.input}
               placeholder = "Enter Hexcode"
               placeholderTextColor = "#9a73ef"
               onChangeText={(value) =>
                { this.setState({value : value}) }}
               />

            <Text style={styles.output}>{this.convertToRGB(value)} 
            </Text>
         </View>
      )
   }

   validateHexcode = (value) => {
    var regExp = /^[0-9A-F]{6}$/i;
    return regExp.test(value);
    }

   convertToRGB = (value) => {
   
       if(this.validateHexcode(this.state.value)){
        //this.setBG(this.state.value)
         (value) => {this.setState({bgcolor: '#'+value })};
       var aRgbHex = value.match(/.{1,2}/g);
       var aRgb = [ 
           parseInt(aRgbHex[0], 16),
           parseInt(aRgbHex[1], 16),
           parseInt(aRgbHex[2], 16)
       ];
       //this.setBG(value);
       return 'R: '+aRgb[0] + ' G: '+aRgb[1] +' B:' +aRgb[2] + ' ' +this.state.bgcolor ;
    }
}

// setBG (){
   
// }
// setBG = (value) => {
//     this.setState({
//         bgcolor: value
//       })
// }

}
export default Task2

const styles = StyleSheet.create({
   container: {
      //paddingTop: 20,
      //justifyContent: 'center',
   },
   input: {
      marginTop: 30,
      margin: 15,
      height: 60,
      borderColor: '#7a42f4',
      borderWidth: 1,
      fontSize: 20,
      textAlign: 'center'
   },

   output: {
    margin: 15,
    height: 60,
    fontSize: 20,
    textAlign: 'center'
   }
})