import { Text, Box, FlatList, Modal, Button } from "native-base";
import { TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { auth, colref } from "../../../firebase";
import { getDocs } from "firebase/firestore";

const HomeScreen = ({ route, navigation }) => {
  //const { user } = route.params;
  const [showModal, setShowModal] = useState(false);
  const [itemData, setItemData] = useState({});
  const [items, setItems] = useState([]);
  const [ifAdd, setIfAdd] = useState(false);

  useEffect(() => {
    getDocs(colref)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (ifAdd == false) {
            items.push({ id: doc.id, ...doc.data() });
          }
        });

        ifAdd = true;
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Box w="100%" h="100%" bgColor="rgb(41,54,63)">
      <Text
        color="#fff"
        mx="5"
        my="10"
        textAlign="center"
        fontWeight="bold"
        fontSize="xl"
      >
        Hello {"user"}! You are logged in.{" "}
      </Text>
      <Text color="#fff" textAlign="center" fontSize="16">
        {" "}
        All the items in database:
      </Text>
      <Text color="#fff" textAlign="center" fontSize="12">
        Click to get details:
      </Text>

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setShowModal(true);
              setItemData(item);
            }}
          >
            <Text color="#fff" textAlign="center" mt="5">
              {item.Name}
            </Text>
          </TouchableOpacity>
        )}
      />

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400">
          <Modal.CloseButton />
          <Modal.Header>Item details:</Modal.Header>
          <Modal.Body>
            <Text fontSize="xl">Item id: {itemData.id}</Text>
            <Text fontSize="xl">Item name: {itemData.Name}</Text>
            <Text fontSize="xl">Item weight: {itemData.Weight}</Text>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="ghost"
              colorScheme="blueGray"
              onPress={() => {
                setShowModal(false);
              }}
            >
              Ok
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default HomeScreen;
