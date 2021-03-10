import React from 'react';
import { StyleSheet,  View, Text } from 'react-native';
import 'react-native-gesture-handler';


function Screen3(props){

    return(
        <View style={styles.container}>
            <Text> My Cart </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default Screen3;