import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../TabsScreens/HomeScreen';

const drawer = createDrawerNavigator();

const DrawerScreen = () => {
    return(
        <drawer.Navigator>
            <drawer.Screen name="Home" component={HomeScreen}/>
        </drawer.Navigator>
    );
}

export default DrawerScreen;