import {
  Text,
  Box,
  Avatar,
  Button,
  Flex,
  Center,
  VStack,
  Heading,
  Modal,
  Input,
} from "native-base";
import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { updateProfile } from "firebase/auth";
import { useFocusEffect } from "@react-navigation/native";


const ProfileScreen = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
        console.log(user)
      setName(user.displayName);
    });
  }, []);
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch((error) => alert(error.message));
  };
  const updateName = () => {
    auth.onAuthStateChanged((user) => {
      updateProfile(user, {
        displayName: name,
      });
    });
  };
  return (
    <Box w="100%" h="100%" bgColor="rgb(41,54,63)">
      <Avatar mt={20} bg="pink.600" alignSelf="center" size="xl">
        {name && <Text>{name}</Text>}
      </Avatar>
      <VStack space={4} alignItems="center">
        <Heading color="#fff" textAlign="center" mb="10">
          Information
        </Heading>
      </VStack>

      <Button
        onPress={() => {
          setShowModal(true);
        }}
        colorScheme="success"
      >
        Settings
      </Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400">
          <Modal.CloseButton />
          <Modal.Header>Settings</Modal.Header>
          <Modal.Body>
            <Text>Set your nickname</Text>
            <Input
              value={name}
              onChangeText={(val) => {
                setName(val);
              }}
              variant="underlined"
              p={2}
              color="#000"
              w="70%"
              mx="auto"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="ghost"
              colorScheme="blueGray"
              onPress={() => {
                setShowModal(false);
                updateName();
              }}
            >
              Ok
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Button onPress={handleSignOut} colorScheme="success">
        Sign Out
      </Button>
    </Box>
  );
};

export default ProfileScreen;
