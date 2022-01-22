import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainScreen from "../HomeScreen";
import Info from "./Help";
import Location from "./Location";
const drawer = createDrawerNavigator();

const DrawerScreen = ({ route, navigation }) => {
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
        name="Info"
        component={Info}
        options={{
          headerShown: true,
          headerTitle: "",
          headerTransparent: true,
        }}
      />
      <drawer.Screen
        name="Location"
        component={Location}
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
