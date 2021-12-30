import React, { useState, useRef } from "react";
import { Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { auth } from "../../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
} from "native-base";

const RegisterScreen = ({ navigation }) => {
  const [Show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginInput = useRef();
  const passwordInput = useRef();
  const handleClick = () => setShow(!Show);

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert("user registered!"), navigation.navigate("Login"))
      .catch((error) => {
        alert(error.message);
        switch (error.code) {
          case "auth/invalid-email":
            alert("Invalid email!");
            break;
          case "auth/internal-error":
            alert("Internal error!");
            break;
          case "auth/email-already-in-use":
            alert("Email already in use!");
            break;
          case "auth/weak-password":
            alert("Password should be at least 6 characters!");
            break;
        }
      });
  };
  const Validation = () => {};

  return (
    <Box
      w="100%"
      h="100%"
      flex={1}
      alignItems="center"
      justifyContent="center"
      bgColor="rgb(41,54,63)"
    >
      <Heading size="lg" color="white" fontWeight="400" textAlign="center">
        Welcome to register form
      </Heading>
      <Heading
        mt="1"
        color="white"
        fontWeight="medium"
        size="xs"
        textAlign="center"
      >
        Provide your data and continue
      </Heading>
      <VStack mx="auto" w="70%" space={3} mt="5">
        <FormControl>
          <FormControl.Label
            _text={{ color: "white", fontSize: "xs", fontWeight: 500 }}
          >
            Email
          </FormControl.Label>
          <Input
            value={email}
            color="white"
            placeholder="Email"
            onChangeText={(val) => setEmail(val)}
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="person" />}
                size={5}
                ml="2"
                color="white"
              />
            }
          />
        </FormControl>

        <FormControl>
          <FormControl.Label
            _text={{ color: "white", fontSize: "xs", fontWeight: 500 }}
          >
            Password
          </FormControl.Label>
          <Input
            type={Show ? "text" : "password"}
            overflow="visible"
            color="white"
            value={password}
            onChangeText={(val) => setPassword(val)}
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="lock" />}
                size={5}
                ml="2"
                color="white"
              />
            }
            InputRightElement={
              <Icon
                onPress={handleClick}
                as={
                  Show ? (
                    <MaterialIcons name="visibility" />
                  ) : (
                    <MaterialIcons name="visibility-off" />
                  )
                }
                size={5}
                mr="2"
                color="white"
              />
            }
            placeholder="Password"
          />
        </FormControl>
        <FormControl>
          <FormControl.Label
            _text={{ color: "white", fontSize: "xs", fontWeight: 500 }}
          >
            Confirm Password
          </FormControl.Label>
          <Input
            type={Show ? "text" : "password"}
            overflow="visible"
            ref={passwordInput}
            value={password}
            color="white"
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="lock" />}
                size={5}
                ml="2"
                color="white"
              />
            }
            InputRightElement={
              <Icon
                onPress={handleClick}
                as={
                  Show ? (
                    <MaterialIcons name="visibility" />
                  ) : (
                    <MaterialIcons name="visibility-off" />
                  )
                }
                size={5}
                mr="2"
                color="white"
              />
            }
            placeholder="Confirm password"
          />
        </FormControl>
        <Button
          mt="10"
          colorScheme="indigo"
          _text={{ color: "white" }}
          bgColor="rgb(110,217,161)"
          onPress={() => {
            handleSignUp();
          }}
        >
          Sign up
        </Button>
      </VStack>
    </Box>
  );
};

export default RegisterScreen;
