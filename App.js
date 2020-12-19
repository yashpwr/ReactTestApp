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
            }}>

            <View style={{
              backgroundColor: "dodgerblue",
              //flexBasis: 100, //width or height
              //flexGrow: 1, // is equal to flex: 1
              //flexShrink: 1, //is equal to flex: -1
              width: 100,
              height: 100,
            }}/>
            <View style={{
              backgroundColor: "gold",
              width: 100,
              height: 100,
            }}/>
            <View style={{
              backgroundColor: "tomato",
              width: 100,
              height: 100,
            }}/>

            </View>
          );
        };

const styles = StyleSheet.create({
  container: {
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});