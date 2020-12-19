import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar, View, Dimensions } from 'react-native';

        export default function App() {

          return(
            <View style={{
              backgroundColor: "#fff",
              flex: 1,
            }}>

            <View style={{
              backgroundColor: "dodgerblue",
              flex: 1,
            }}/>
            <View style={{
              backgroundColor: "gold",
              flex: 1,
            }}/>
            <View style={{
              backgroundColor: "tomato",
              flex: 1,
            }}/>

            </View>
          );
        };

const styles = StyleSheet.create({
  container: {
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});