import { Text, Box, Avatar, Button, Flex, Center } from "native-base";
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
            <Avatar
                mt={20}
                bg="pink.600"
                alignSelf="center"
                size="xl"
                source={{
                    uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
                }}
            >
            User
            </Avatar>
            <Flex mt={15}>
                <Button onPress={handleSignOut} colorScheme="success">Sign Out</Button>
            </Flex>
        </Box>
    );
};

export default ProfileScreen;
