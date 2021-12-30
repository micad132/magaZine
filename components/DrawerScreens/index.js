import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainScreen from "../HomeScreen";
import Help from "./Help";
const drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <drawer.Navigator>
      <drawer.Screen
        name="Home"
        component={MainScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerTransparent: true,
        }}
      />
      <drawer.Screen
        name="Help"
        component={Help}
        options={{
          headerShown: true,
          headerTitle: "",
          headerTransparent: true,
        }}
      />
    </drawer.Navigator>
  );
};

export default DrawerScreen;
