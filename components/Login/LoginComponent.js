import React, { useState } from "react";
import { StyleSheet } from "react-native";
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
  IconButton,
  HStack,
  Divider,
  View,
} from "native-base";

function LoginScreen({ navigation }) {
  const [login, setLogin] = useState("user");
  const [Show, setShow] = useState(false);
  const handleClick = () => setShow(!Show);

  return (
    <Box w="100%" h="100%" bgColor="rgb(41,54,63)">
      <Box
        safeArea
        flex={1}
        justifyContent="center"
        alignItems="center"
        p="2"
        py="8"
        mx="auto"
        w="70%"
        h="100%"
        position="relative"
      >
        <View w="100%" mb="50">
          <Heading size="lg" fontWeight="600" color="#fff" textAlign="center">
            Welcome to MagaZine
          </Heading>
          <Heading
            mt="1"
            color="#fff"
            fontWeight="medium"
            size="xs"
            textAlign="center"
          >
            Login to continue!
          </Heading>
          <VStack space={3} mt="5" w="100%">
            <FormControl w="100%">
              <FormControl.Label
                _text={{
                  color: "#fff",
                  fontSize: "xs",
                  fontWeight: 500,
                }}
              >
                Login
              </FormControl.Label>
              <Input
                placeholder="Login"
                w="100%"
                color="#fff"
                onChangeText={(val) => setLogin(val)}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label
                _text={{
                  color: "#fff",
                  fontSize: "xs",
                  fontWeight: 500,
                }}
              >
                Password
              </FormControl.Label>
              <Input
                type={Show ? "text" : "password"}
                placeholder="Password"
                color="#fff"
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
              />
            </FormControl>
          </VStack>
          <View style={styles.loginBtnContainer}>
            <Text
              style={[
                styles.buttonText,
                { textAlign: "center", marginBottom: 10 },
              ]}
            >
              {" "}
              Hello {login}!
            </Text>
            <Button style={styles.buttonLoginStyle}>
              <Text style={styles.buttonText}> LOGIN</Text>
            </Button>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Text color="#fff">Don't have an account?</Text>
          <Button
            style={styles.buttonRegisterStyle}
            size="sm"
            variant="link"
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.buttonText}>REGISTER</Text>
          </Button>
        </View>
      </Box>
    </Box>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  buttonRegisterStyle: {
    backgroundColor: "rgb(110,217,161)",
    width: "70%",
    margin: 10,
  },
  buttonLoginStyle: {
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "rgb(110,217,161)",
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
  homeStyle: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgb(41,54,63)",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    position: "absolute",
    bottom: 20,
  },
  loginBtnContainer: {
    width: "100%",
    marginTop: 20,
    paddingTop: 30,
    paddingBottom: 30,
    color: "#fff",
  },
});
