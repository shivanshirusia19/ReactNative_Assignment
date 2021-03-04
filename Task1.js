import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';


class Task1 extends Component{

  constructor(props){
    super(props)
    this.state = { pin1: "", pin2: "", pin3: "", pin4: "", btnref: ""}
  }

  componentDidMount=() => {
    this.refs.pin1ref.focus()
  }

  render(){

    const { pin1, pin2, pin3, pin4, btnref} = this.state

    return(

  <ImageBackground
        style={styles.image}
        source={{
          uri:
            'https://www.toptal.com/designers/subtlepatterns/patterns/moroccan-flower-dark.png',
        }}>

      <View style={styles.container}>
        

       <View style={styles.header}> 
       <Text style={styles.heading}>Log into Saavn</Text>
       </View>

       <View> 
       <Text style={styles.heading2}>Enter your code</Text>
       </View>

      <View style={styles.input_container}>
        <TextInput ref={'pin1ref'} 
        onChangeText={(pin1) => {
          this.setState({pin1 : pin1})
          if(pin1 != "")
          { this.refs.pin2ref.focus() }
          }}
        value= {pin1}
        maxLength={1} 
        keyboardType= {'numeric'}
        style={styles.input} 
        />
        <TextInput ref={'pin2ref'} 
        onChangeText={(pin2) => {
          this.setState({pin2 : pin2})
          if(pin2 != "")
          { this.refs.pin3ref.focus() }
          }}
        value= {pin2}
        maxLength={1} 
        keyboardType= {'numeric'}
        style={styles.input} 
        />
        <TextInput ref={'pin3ref'} 
        onChangeText={(pin3) => {
          this.setState({pin3 : pin3})
          if(pin3 != "")
          { this.refs.pin4ref.focus() }
          }}
        value= {pin3}
        maxLength={1} 
        keyboardType= {'numeric'}
        style={styles.input} 
        />
        <TextInput ref={'pin4ref'} 
        onChangeText={(pin4) => {
          this.setState({pin4 : pin4})
          }}
        value= {pin4}
        maxLength={1} 
        keyboardType={'numeric'}
        style={styles.input} 
        />   
      </View>

      <TouchableOpacity style = {styles.button} onPress= {this.onClick}>
            <Text style={styles.button_text}>Continue</Text>
      </TouchableOpacity>

     
      </View>
      </ImageBackground>
    )
  }

  onClick = () => { alert("Your Pin is " +this.state.pin1 +this.state.pin2 +this.state.pin3 +this.state.pin4 ) }

}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#3cb371',
  },
  heading: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    margin: 10,
  },
  heading2: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 60,
  },
  input_container: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    marginBottom: 20,
  },
  input: {
    fontWeight: '400',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: '#d3d3d3',
  },
  button: {
    height: 40,
    width: 300,
    margin: 10,
    padding: 10, 
    borderWidth: 1,
    borderColor: '#3cb371',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  button_text: {
    color:'#3cb371',
    textAlign: 'center',
    fontSize: 15,
  },

});

export default Task1;
