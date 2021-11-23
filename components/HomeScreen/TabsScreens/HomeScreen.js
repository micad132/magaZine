import { Text,Box,FlatList,Modal,Button} from "native-base";
import { TouchableOpacity } from "react-native";
import React , {useState} from "react";

import {Alert} from 'react-native';






const HomeScreen = ({route,navigation}) =>{

    const {user} = route.params;
    const [showModal,setShowModal] = useState(false);
    const [userData,setUserData] = useState({});
    const data = [

        {
            id: '1',
            name: 'BigBox',
            weight: '100'
        },
        {
            id: '2',
            name: 'TV',
            weight: '50'
        },
        {
            id:'3',
            name: 'Phones',
            weight: '200'
        }


    ]
    
    return(

        
        <Box w="100%" h="100%" bgColor="rgb(41,54,63)">
             
            <Text color="#fff" mx="5" my="10" textAlign="center" fontWeight="bold" fontSize="xl">Hello {user}! You are logged in. </Text>
            <Text color="#fff" textAlign="center" fontSize="16"> All the items in database:</Text>
            <Text color="#fff" textAlign="center" fontSize="12">Click to get details:</Text>
            <FlatList 
            
                data={data}
                renderItem={({item})=> (
                    <TouchableOpacity onPress={()=> 
                        {
                            setShowModal(true);
                            setUserData(item);
                        
                        }
                        
                        }>
                        <Text color="#fff" textAlign="center" mt="5">{item.name}</Text>

                        

                                
                                

                        
                        
                    </TouchableOpacity>
                    
                )}
                


                
            />

            <Modal  isOpen={showModal} onClose={()=> setShowModal(false)}>
                                <Modal.Content maxWidth="400">
                                    <Modal.CloseButton/>
                                    <Modal.Header>Item details:</Modal.Header>
                                        <Modal.Body>

                                        
                                            <Text fontSize="xl">Item id: {userData.id}</Text>
                                            <Text fontSize="xl">Item name: {userData.name}</Text>
                                            <Text fontSize="xl">Item weight: {userData.weight}</Text>


                                        </Modal.Body>
                                    <Modal.Footer>

                                        
                                            <Button
                                                variant="ghost"
                                                colorScheme="blueGray"
                                                onPress={() => {
                                                setShowModal(false)
                                                }}
                                            >
                                            Ok
                                            </Button>
                                            
                                        

                                    </Modal.Footer>


                                </Modal.Content>


            </Modal>
            
            

               
                



            
        </Box>
        
        
    );

}

export default HomeScreen;