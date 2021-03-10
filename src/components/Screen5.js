import React from 'react';
import { StyleSheet,  View, Text } from 'react-native';
import 'react-native-gesture-handler';


function Screen5(props){

    return(
        <View style={styles.container}>
            <Text> Account </Text>
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

export default Screen5;