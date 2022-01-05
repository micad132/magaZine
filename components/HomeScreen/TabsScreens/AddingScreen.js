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
  ScrollView,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "native-base";
import React, { useRef, useState } from "react";
import { Alert } from "react-native";
import { auth, colref } from "../../../firebase";
import ImagePicker from "./ImagePicker";
const AddingScreen = () => {
  const formEl = useRef(null);
  const [nameInput, setNameInput] = useState("");
  const [weightInput, setWeightInput] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = () => {
    if (nameInput && weightInput && image) {
      addDoc(colref, {
        Name: nameInput,
        Weight: weightInput,
      }).then(() => {
        setNameInput("");
        setWeightInput("");
      });
      Alert.alert("Item succesfully added!");
    } else {
      Alert.alert("Empty inputs!");
    }
  };

  return (
    <Box w="100%" h="100%" bgColor="rgb(41,54,63)">
      <ScrollView>
        <Text mx="auto" my="10" color="#fff">
          Provide some info to add item!
        </Text>
        <ImagePicker image={image} onImagePicked={setImage} />
        <FormControl ref={formEl}>
          <Stack space={5}>
            <Stack>
              <FormControl.Label mx="auto" px="5">
                <Text color="#fff">Item name:</Text>
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
              <FormControl.Label mx="auto" px="5">
                <Text color="#fff">Item weight:</Text>
              </FormControl.Label>
              <NumberInput min={1} max={100000000}>
                <NumberInputField
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
                <NumberInputStepper color="rgb(110,217,161)">
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
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
      </ScrollView>
    </Box>
  );
};

export default AddingScreen;
