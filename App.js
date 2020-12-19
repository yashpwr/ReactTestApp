import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar, View, Dimensions } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks';

        export default function App() {
          //console.log(useDeviceOrientation());
          //console.log(Dimensions.get("screen"));

          const {landscape} = useDeviceOrientation();

          return(
            <SafeAreaView style={styles.container}>
              <View style={{
                backgroundColor: "dodgerblue",
                width: "100%",
                height: landscape ? '100%' : '50%',
              }}></View>
            </SafeAreaView>
          );
        };

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: 'dodgerblue',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});