import { Text,Box } from "native-base";
import React from "react";
import {Alert} from 'react-native';



const HomeScreen = ({route,navigation}) =>{

    const {user} = route.params;
    
    return(

        
        <Box w="100%" h="100%" bgColor="rgb(41,54,63)">
             
            <Text color="#fff" mx="5" my="10" textAlign="center" fontWeight="bold" fontSize="xl">Hello {user}! You are logged in. </Text>
        </Box>
        
    );

}

export default HomeScreen;