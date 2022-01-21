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
import { auth, user, onAuth } from "../../../firebase";
import { signOut, updateProfile, onIdTokenChanged } from "firebase/auth";

const ProfileScreen = ({ navigation, route }) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [logOut, setLogOut] = useState(false);
  const [user, setUser] = useState();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Wylogowano");
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      onIdTokenChanged(auth, (user) => {
        if (user) {
          setUser(user);
          setName(user.displayName);
        } else {
          return;
        }
      });
    });
    return unsubscribe;
  }, [navigation]);
  const updateName = () => {
    if (user) {
      updateProfile(user, {
        displayName: name,
      });
      alert("Zmieniono!");
    }
  };

  return (
    <Box w="100%" h="100%" bgColor="rgb(41,54,63)">
      <Avatar mt={20} bg="pink.600" alignSelf="center" size="xl">
        {user && <Text>{user.displayName}</Text>}
      </Avatar>
      <VStack space={4} alignItems="center">
        <Heading color="#fff" textAlign="center" mb="10">
          Information
        </Heading>
      </VStack>
      <Text mb={5} fontSize="lg" textAlign="center" color="#fff">
        Email: {user && user.email}
      </Text>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400">
          <Modal.CloseButton />
          <Modal.Header>Settings</Modal.Header>
          <Modal.Body>
            <Text>Set your nickname</Text>
            <Input
              maxLength={10}
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
      <Box alignItems="center">
        <Button
          onPress={() => {
            setShowModal(true);
          }}
          colorScheme="success"
        >
          Settings
        </Button>
        <Button
          mt={5}
          onPress={() => {
            setLogOut(true);
            handleSignOut();
          }}
          colorScheme="success"
        >
          Sign Out
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileScreen;
