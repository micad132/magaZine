import { Text, Box } from "native-base";
import React,{useState,useEffect} from "react";


const EditScreen = ({navigation}) => {


  const [date,setDate] = useState('');
  const [time,setTime] = useState('');
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']


  
  useEffect( ()=> {

    

  },[])

  return (
    <Box w="100%" h="100%" bgColor="rgb(41,54,63)">
      <Text color="#fff" mx="auto" marginTop="40" >
         edit screen
      </Text>
      
      
    </Box>
  );
};

export default EditScreen;
