import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView, StyleSheet, Image, ActivityIndicator, RefreshControl} from 'react-native';

const Item = ({data}) => {
    return(
        <View style={styles.box}>
               <View style={styles.textbox}>
                 <Text style={styles.line1}>
                    {data.id}. {data.first_name} {data.last_name}
                 </Text>
                 <Text style={styles.line2}>{data.email}</Text>
               </View>
               <Image source={{ uri: data.avatar }} style={styles.image} />
        </View>
    )
}

const FlatlistEx = () => {

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [isRefreshing, refreshList] = useState(false)
    const [initData, setInitData] = useState([])

    const renderItem = ( {item} ) => (
     <Item data = {item} /> 
    )

    useEffect( () => {
        fetch('https://reqres.in/api/users?page='+page)
        .then(res => res.json())
        .then(resJson => resJson.data)
        .then(respone => {
            if(page>1){
             return setData([...data, ...respone])
            }
            else if(isRefreshing && page == 1){
                setData([])
                setData(initData)
            }
            else{
                setInitData(respone)
                return setData(respone)
            }
        })
        .catch(err => console.log(err))
    }, [page]);

    return (
        <SafeAreaView styles={styles.container}>
            <FlatList
            data = {data}
            renderItem = {renderItem}
            keyExtractor = { (item) => item.id.toString() }
            onEndReached = { () => {
                setTimeout( () => {
                    setPage(page+1)
                },3000)
            }}
            ListFooterComponent = { () => {
               return( <View>
                   <ActivityIndicator loading={isRefreshing} size={"large"} />
                </View>
               )
            }}
            refreshControl = {
                <RefreshControl 
                refreshing = {isRefreshing}
                onRefresh = { () => {
                    refreshList(true);
                    setTimeout( () => {
                        setPage(1)
                        refreshList(false)
                    },5000)
                }}
                />
            }
            />
        </SafeAreaView>
    )
}

export default FlatlistEx;

const styles = StyleSheet.create({
    container: {
      flex: 1,

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