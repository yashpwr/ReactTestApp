import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar, View, Dimensions } from 'react-native';

        export default function App() {

          return(
            <View style={{
              backgroundColor: "#fff",
              flex: 1,
              flexDirection: "row", //Horizontal
              justifyContent: "center", //Main
              alignItems: "center",
              flexWrap: 'wrap',
              alignContent: "center",
            }}>

            <View style={{
              backgroundColor: "dodgerblue",
              width: 100,
              height: 300,
              //flex: 1,
            }}/>
            <View style={{
              backgroundColor: "gold",
              width: 100,
              height: 100,
              //flex: 1,
            }}/>
            <View style={{
              backgroundColor: "tomato",
              width: 100,
              height: 100,
              //flex: 1,
            }}/>
            <View style={{
              backgroundColor: "grey",
              width: 100,
              height: 100,
              //flex: 1,
            }}/>
            <View style={{
              backgroundColor: "green",
              width: 100,
              height: 100,
              //flex: 1,
            }}/>

            </View>
          );
        };

const styles = StyleSheet.create({
  container: {
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});