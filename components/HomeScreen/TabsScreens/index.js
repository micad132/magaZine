import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditScreen from "./EditScreen";
import HomeScreen from "./HomeScreen";
const Stack = createNativeStackNavigator();

export default function TabsScreens() {
    return (
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="Edit"
          component={EditScreen}
          options={{
            headerShown: false,
            headerTransparent: true,
            headerTitleAlign: "center",
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
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
  