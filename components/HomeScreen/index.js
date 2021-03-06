import { Stack, Text } from "native-base";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./TabsScreens/HomeScreen";
import AddingScreen from "./TabsScreens/AddingScreen";
import ProfileScreen from "./TabsScreens/ProfileScreen";
import TabsScreens from "./TabsScreens";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const MainScreen = ({ navigation,route }) => {
  return (
    <Tab.Navigator initialRouteName="HomeScreen">
      <Tab.Screen
        name="Homee"
        component={TabsScreens}
        options={{headerShown: false, tabBarShowLabel: false, tabBarIcon: () => <MaterialCommunityIcons name="home" size={25} /> }}
      />
      <Tab.Screen
        name="Adding" 
        component={AddingScreen} 
        options={{headerShown: false, tabBarShowLabel: false, tabBarIcon: () => <MaterialCommunityIcons name="plus" size={25}/>}}
      />
      <Tab.Screen
        name="Profile" 
        component={ProfileScreen} 
        options={{headerShown: false, tabBarShowLabel: false, tabBarIcon: () => <MaterialCommunityIcons name="account-cowboy-hat" size={25}/>}}
        />
        
           

        
    </Tab.Navigator>
    
   
  );
};

export default MainScreen;
