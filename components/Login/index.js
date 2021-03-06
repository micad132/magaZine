import React from "react";
import LoginScreen from "./LoginComponent";
import RegisterScreen from "./RegisterComponent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerScreen from "../DrawerScreens";

const Stack = createNativeStackNavigator();

export default function Login() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
          headerTransparent: true,
          headerTitleAlign: "center",
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
          headerTransparent: true,
          headerTitleAlign: "center",
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="DrawerScreen"
        component={DrawerScreen}
        options={{
          headerShown: false,
          headerTransparent: true,
          headerTitleAlign: "center",
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
}
