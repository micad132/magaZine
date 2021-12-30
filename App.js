import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./components/Login";
import "react-native-gesture-handler";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer']);

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Login />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
