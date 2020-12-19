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
              width: 100,
              height: 100,
            }}/>
            <View style={{
              backgroundColor: "gold",
              width: 100,
              height: 100,
              top: 20,
              //bottom: 20,
              left: 20,
              //right: 20
              position: 'absolute'
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