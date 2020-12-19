import React from 'react';
import { StyleSheet, 
        Text, 
        TouchableHighlight, 
        Image, 
        Alert, 
        SafeAreaView, 
        Button, 
        Platform,
        StatusBar } from 'react-native';

const handlepress = () => console.log("text pressed");

const App1 = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlepress}>Hello <Text style={styles.innerText}>World </Text></Text>
      <TouchableHighlight onPress={() => console.log('Image tapepd')}>
      <Image 
      blurRadius={1}
      fadeDuration={1000}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"
        }} />
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const containerStyle = {color: "orange"};
const App2 = () => {
  return(
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button 
      color="orange"
      title="click Me" 
      onPress={()=> 
        Alert.alert("My Tittle", "My Message", [ 
          {text: "Yes", onPress: ()=> console.log('Cliked Yes')}, 
          {text: "No", onPress: ()=> console.log('Cliked No')}, 
          ]) 
        }
      />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  innerText:{
    color: 'red'
  }
});

const layout = () => {
  return(
    <SafeAreaView style={styles.container}>

    </SafeAreaView>
  );
};

//export default App1;
export default App2;