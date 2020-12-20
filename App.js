import React from 'react';
import { Text, View } from 'react-native';
import AppText from './app/components/AppText';
import { AntDesign } from '@expo/vector-icons';

export default function App() {

  return(
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      
      <AntDesign name="heart" size={24} color="black" />
    <Text>I love React Native!</Text>

    </View>
  );
}