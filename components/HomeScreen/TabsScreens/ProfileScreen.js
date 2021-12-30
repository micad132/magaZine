import { Text, Box } from "native-base";
import React from "react";
import { auth } from "../../../firebase";
import { TouchableOpacity } from "react-native";

const ProfileScreen = ({navigation}) => {
    const handleSignOut = () => {
        auth
          .signOut()
          .then(() => {
            navigation.replace("Login");
          })
          .catch((error) => alert(error.message));
    }
    return (
        <Box w="100%" h="100%" bgColor="rgb(41,54,63)">
        <Text color="#fff" mx="5" my="10">
            ProfileScreen
        </Text>
        <TouchableOpacity onPress={handleSignOut}>
            <Text color="#fff">Sign Out</Text>
        </TouchableOpacity>
        </Box>
    );
};

export default ProfileScreen;
