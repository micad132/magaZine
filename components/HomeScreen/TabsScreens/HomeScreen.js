import { Text, Box, FlatList, Modal, Button, Avatar,View } from "native-base";
import { Image, TouchableOpacity,StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { auth, colref } from "../../../firebase";
import { getDocs } from "firebase/firestore";
import { alignItems, backgroundColor, marginBottom } from "styled-system";

const HomeScreen = ({ route, navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [itemData, setItemData] = useState({});
  const [items, setItems] = useState([]);
  const [ifAdd, setIfAdd] = useState(true);

  useEffect(() => {
    
    setIfAdd(true);
    
    
    
    getDocs(colref)
      .then((snapshot) => {

        
        snapshot.docs.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
          
        });
        
      })
      .finally(() => {
        setIfAdd(false); //bez tego nie dziala idk
      })
      .catch((err) => {
        console.log(err.message);
      });
    
      return () => {
        setItems([]);
       
        setItemData({});
        setShowModal(false);
      }
  }, []);

  return (
    <Box w="100%" h="100%" bgColor="rgb(41,54,63)">
      <Text
        color="#fff"
        mx="5"
        mt="70"
        mb="30"
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

      {ifAdd == false && (
        <FlatList
        style={styles.container}
          data={items}
          renderItem={({ item }) => (
            <View style={styles.viewStyle}>
            <TouchableOpacity
              style={styles.items}
              onPress={() => {
                setShowModal(true);
                setItemData(item);
              }}
            >
              <Text color="#fff" >
                {item.Name}
              </Text>
            </TouchableOpacity>
            </View>
          )}
        />
      )}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="600" minWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Item details:</Modal.Header>
          <Modal.Body>
            <Avatar mx="auto" source={{ uri: itemData.ImageUri }} />
            <Text fontSize="md">Item id: {itemData.id}</Text>
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


const styles = StyleSheet.create({


  container: {

      flex: 1,
      
      
  },


  viewStyle: {

  

    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

    items: {

        borderWidth: 1,
        borderRadius: 5,
        borderColor: "white",
        marginBottom: 10,
        width: '60%',
        justifyContent: "center",
        alignItems: "center",
        padding: 10
        
        
    }



})
