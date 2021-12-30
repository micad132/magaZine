import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../HomeScreen/TabsScreens/HomeScreen';
import MainScreen from "../HomeScreen";

const drawer = createDrawerNavigator();

const DrawerScreen = () => {
    return(
        <drawer.Navigator>
            <drawer.Screen name="Home" component={MainScreen}/>
        </drawer.Navigator>
    );
}

export default DrawerScreen;