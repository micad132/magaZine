import React,{ useState } from 'react';
import {StyleSheet} from 'react-native';
// 1. import `NativeBaseProvider` component
import {View,NativeBaseProvider,Text, Box, Button, Stack } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/Login';

export default function App() {
  // 2. Use at the root of your app

   /*const [current,setCurrent] = useState('Home');
   const registerWindow = (

      <Register/>
   );*/
   return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Login/>
      </NavigationContainer>
    </NativeBaseProvider>
  );
    //return current === 'Home' ? HomeWindow : current;
}
const styles = StyleSheet.create({
    buttonStyle: {
        color: "white" ,
        backgroundColor: "yellow",
        width: "70%",
        margin: 10,
    },
    buttonText: {
      color: "black",
    },
    test: {
      backgroundColor: "blue",
    },
    homeStyle: {

      height: "100%",
      width: "100%",
      backgroundColor: "rgb(41,54,63)",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
});