import React, { useState, useRef } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { MaterialIcons } from "@expo/vector-icons";
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
  const handleClick = () => setShow(!Show);
  const [login,setLogin] = useState('');
  const [password,setPassword] = useState('');
  const loginInput = useRef();
  const passwordInput = useRef();

  useFocusEffect(
    React.useCallback(()=> {

        
        //alert(loginInput.current.value);
        //passwordInput.current.value = 'siema';
      //clear();

        return() => {
        
        setLogin('');
        setPassword('');
        

        }
    },[]));

  return (
    <Box
      
     
      w="100%"
      h="100%"
      flex={1}
      alignItems="center"
      justifyContent="center"
      bgColor="rgb(41,54,63)"
      
    >
      <Heading size="lg" color="white" fontWeight="600" textAlign="center">
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
            _text={{ color: "white",fontSize: "xs", fontWeight: 500 }}
          >
            Login
          </FormControl.Label>
          <Input
            color="white"
            placeholder="Login"
            ref={loginInput}
            value ={login}
            onChangeText={() => 
              {  
                setLogin(loginInput.current.text)
              }}
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
            ref={passwordInput}
            value={password}
            onChangeText={() => 
              {
                
                
                setPassword(passwordInput.current.text)
              }}
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
            onChangeText={() => 
              {
                
                
                setPassword(passwordInput.current.text)
              }}
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
          
        >
          Sign up
        </Button>
      </VStack>
    </Box>
  );
};

export default RegisterScreen;
