import { addDoc } from "firebase/firestore";
import {
  Input,
  Text,
  Box,
  Stack,
  FormControl,
  Button,
  ScrollView,
} from "native-base";
import { v4 as uuidv4 } from "uuid";
import React, { useRef, useState } from "react";
import { Alert } from "react-native";
import { storage, colref } from "../../../firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  child,
} from "firebase/storage";
import ImagePicker from "./ImagePicker";
const AddingScreen = ({ navigation }) => {
  const formEl = useRef(null);
  const [nameInput, setNameInput] = useState("");
  const [weightInput, setWeightInput] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async () => {
    if (nameInput && weightInput && image) {
      const fileExt = image.uri.split(".").pop();
      var uuid = uuidv4();
      const filename = `${uuid}.${fileExt}`;
      var storageRef = ref(storage, `images/${filename}`);
      const response = await fetch(image.uri);
      const blob = await response.blob();
      console.log(response);
      const metadata = {
        contentType: `image/${fileExt}`,
      };
      var uploadTask = uploadBytesResumable(storageRef, blob, metadata);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              console.log("Storage unauthorized");
              break;
            case "storage/canceled":
              console.log("Storage upload canceled");
              break;
            case "storage/unknown":
              console.log("Storage unknown");
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            addDoc(colref, {
              Name: nameInput,
              Weight: weightInput,
              ImageUri: downloadURL,
            }).then(() => {});
          });
        }
      );
      Alert.alert("Item succesfully added!");
      //navigation.navigate("Homee");
      setNameInput("");
      setWeightInput("");
      setImage("");
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
      </ScrollView>
    </Box>
  );
};

export default AddingScreen;
