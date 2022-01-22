import { Text, Box } from "native-base";
import React,{useState,useEffect} from "react";
import Battery from '../InfoSensors/Battery';

const Info = (route) => {


  const [date,setDate] = useState('');
  const [time,setTime] = useState('');
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']


  const setSecondsTime = () => {


    
    setInterval(() => {

      let hours = new Date().getHours()+1;
      let minutes = new Date().getMinutes();
      let seconds = new Date().getSeconds();
      let fullTime = hours + ":" + minutes +":" + seconds;
      setTime(fullTime);
    }, 1000)
  }
  useEffect( ()=> {

    let day = new Date().getDay();
    setDate(days[day]);
    setSecondsTime();

  },[])

  return (
    <Box w="100%" h="100%" bgColor="rgb(41,54,63)">
      <Text color="#fff" mx="auto" marginTop="40" >
         This app was coded by Bart Mortar and Mike Mosiolek
      </Text>
      <Text  margin="0" color="#fff" mx="auto" my="10" >
         Today is {date} , {time}
      </Text>
      <Battery/>
    </Box>
  );
};

export default Info;
