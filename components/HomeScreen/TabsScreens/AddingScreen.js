import { addDoc } from "firebase/firestore";
import {
  Label,
  Form,
  Input,
  Text,
  Box,
  Stack,
  FormControl,
  Button,
} from "native-base";
import React, { useRef, useState } from "react";
import { Alert } from "react-native";
import { auth, colref } from "../../../firebase";
const AddingScreen = () => {
  const formEl = useRef(null);
  // const nameInput = useRef(null);
  // const weightInput = useRef(null);
  const [nameInput, setNameInput] = useState("");
  const [weightInput, setWeightInput] = useState("");

  const handleSubmit = () => {
    addDoc(colref, {
      Name: nameInput,
      Weight: weightInput,
    }).then(() => {
      setNameInput("");
      setWeightInput("");
    });

    Alert.alert("Item succesfully added!");
  };

  return (
    <Box w="100%" h="100%" bgColor="rgb(41,54,63)">
      <Text mx="auto" my="10" color="#fff">
        Provide some info to add item!
      </Text>

      <FormControl ref={formEl}>
        <Stack space={5}>
          <Stack>
            <FormControl.Label bgColor="#fff" mx="auto" px="5">
              Item name:
            </FormControl.Label>
            <Input
              value={nameInput}
              onChangeText={(val) => {
                setNameInput(val);
              }}
              variant="underlined"
              p={2}
              color="#fff"
              w="70%"
              mx="auto"
            />
          </Stack>
          <Stack>
            <FormControl.Label bgColor="#fff" mx="auto" px="5">
              Item weight:
            </FormControl.Label>
            <Input
              value={weightInput}
              onChangeText={(val) => {
                setWeightInput(val);
              }}
              variant="underlined"
              p={2}
              w="70%"
              mx="auto"
              color="#fff"
            />
          </Stack>
          <Stack>
            <Button
              bgColor="rgb(110,217,161)"
              w="50%"
              mx="auto"
              onPress={() => handleSubmit()}
            >
              Add item!
            </Button>
          </Stack>
        </Stack>
      </FormControl>
    </Box>
  );
};

export default AddingScreen;
