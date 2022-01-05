import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Box, Button, Flex, Image, Text } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CurryImagePicker = ({ image, onImagePicked }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(null);
      setSelectedImage(result.uri);
    }
  };
  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
    });
    if (!result.cancelled) {
      setSelectedImage(null);
      setSelectedImage(result.uri);
    }
  };

  return (
    <Box w="100%">
      <Box w="100%" alignItems="center">
        <Text color="#fff">Choose item picture!</Text>
        {selectedImage && (
          <Image h="150" w="80%" source={{ uri: selectedImage }} alt="Txt" />
        )}
      </Box>
      <Flex direction="row" mx="auto">
        <Button
          bgColor="rgb(110,217,161)"
          mt="5"
          mb="5"
          mr="1"
          onPress={pickImage}
        >
          <MaterialCommunityIcons color="#fff" name="image" size={25} />
        </Button>
        <Button bgColor="rgb(110,217,161)" mt="5" mb="5" onPress={takePhoto}>
          <MaterialCommunityIcons color="#fff" name="camera" size={25} />
        </Button>
      </Flex>
    </Box>
  );
};

export default CurryImagePicker;
