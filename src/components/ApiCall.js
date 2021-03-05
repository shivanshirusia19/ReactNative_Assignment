import React, { Component } from "react";
import {
  View,
  Button,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";

export default class ApiCall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: "",
    };
  }

  onPress = async () => {
    this.setState({
      loading: true,
    });

    try {
      const res = await fetch("https://reqres.in/api/users");
      const response = await res.json();

      this.setState({
        loading: false,
        data: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.box}>
         <View style={styles.textbox}>
          <Text style={styles.line1}>
           {item.id}. {item.first_name} {item.last_name}
          </Text>
          <Text style={styles.line2}>{item.email}</Text>
         </View>
        <Image source={{ uri: item.avatar }} style={styles.image} />
      </View>
    );
  };

  render() {
    const { loading, data } = this.state;

    return (
      <>
        <SafeAreaView />
        <ScrollView contentContainerStyle={styles.container}>
          {!loading && !data ? (
            <View style={styles.button}>
              <Button title='Click to Fetch Data' onPress={this.onPress} color='#5f9ea0' />
            </View>
          ) : (
            <></>
          )}
          <ActivityIndicator size='large' animating={loading} color={"black"} />

          {!loading && Boolean(data) && (
            <FlatList
              data={data}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id}
            />
          )}
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    margin: 50,
    height: 50,
  },
  box: {
    flex: 1,
    padding: 16,
    elevation: 10,
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    backgroundColor: '#5f9ea0',
  },
 textbox: {
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
    borderWidth: 1,
  },
  imagebox: {
      flex: 1,
      justifyContent: 'flex-end'
  },
  line1: {
    marginBottom: 4,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  },
  line2: {
    color: 'white'
  },
});
