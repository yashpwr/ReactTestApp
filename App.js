import React from 'react';
import { Text, View } from 'react-native';

export default function App() {

  return(
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      
      <Text style={{
        fontSize: 30,
        //fontFamily: "Courier",
        fontFamily: "Roboto",
        fontStyle: "italic",
        fontWeight: "bold",
        color: "tomato",
        textTransform: "capitalize",
        //textDecorationLine: "underline line-through",
        textAlign: "center",
        lineHeight: 40,



      }} >I love React Native! This is my First React Native App!! Here some more Text</Text>

    </View>
  );
}