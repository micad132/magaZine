import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Avatar, Box, Button, Flex, Image, Text } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CurryImagePicker = ({ image, onImagePicked }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    if (image) {
      setSelectedImage({ uri: image });
    }
  }, [image]);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage();
      onImagePicked();
      setSelectedImage({ uri: result.uri });
      onImagePicked({ uri: result.uri });
    }
  };
  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
    });
    if (!result.cancelled) {
      setSelectedImage();
      onImagePicked();
      setSelectedImage({ uri: result.uri });
      onImagePicked({ uri: result.uri });
    }
  };

  return (
    <Box w="100%">
      <Box w="100%" alignItems="center">
        <Text color="#fff">Choose item picture!</Text>
        {selectedImage && <Avatar size={150} source={selectedImage} />}
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
