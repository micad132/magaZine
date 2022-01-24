import { addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import {
  Input,
  Text,
  Box,
  Stack,
  FormControl,
  Button,
  ScrollView,
  Avatar,
} from "native-base";
import React, { useRef, useState } from "react";
import { Alert } from "react-native";
import { storage, colref, db } from "../../../firebase";
const EditScreen = ({ navigation, route }) => {
  const formEl = useRef(null);
  const [nameInput, setNameInput] = useState(route.params.item.Name);
  const [weightInput, setWeightInput] = useState(route.params.item.Weight);

  const handleEdit = () => {
    if (nameInput && weightInput) {
      const docRef = doc(db, "Inventory", route.params.item.id);
      updateDoc(docRef, {
        Name: nameInput,
        Weight: weightInput,
      });
      Alert.alert("Item edited");
      navigation.navigate("HomeScreen");
    }
  };

  return (
    <Box w="100%" h="100%" bgColor="rgb(41,54,63)">
      <ScrollView>
        <Text mx="auto" marginTop="20" color="#fff">
          Welcome to editing screen!
        </Text>
        <Text mx="auto" my="5" color="#fff">
          You choosed item with id: {route.params.item.id}
        </Text>
        <Avatar
          size={150}
          mx="auto"
          source={{ uri: route.params.item.ImageUri }}
        />
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
              <Input
                value={weightInput}
                maxLength={10}
                keyboardType="numeric"
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
                onPress={() => handleEdit()}
              >
                Edit item!
              </Button>
            </Stack>
          </Stack>
        </FormControl>
      </ScrollView>
    </Box>
  );
};

export default EditScreen;
