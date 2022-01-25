import { AuthErrorCodes } from "firebase/auth";
import { Text, Box,View } from "native-base";
import React,{useState,useEffect} from "react";
import { StyleSheet } from "react-native";



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
      <Text color="#fff" marginTop="40" fontSize="20" textAlign="center" >
         This app was coded by Bart Mortar{"\n"} and Mike Mosiolek
      </Text>
      <Text  margin="0" color="#fff" mx="auto" my="10" fontSize="18" >
         Today is {date} , {time}
      </Text>

      <View color="#fff" borderWidth="3" borderColor="lightgreen" width="90%" marginLeft="5" padding="5">

        <Text style={styles.header}>Simple tutorial how to use our app!</Text>
        <Text style={styles.textStyle}>1.Login or register if you don't have an account!</Text>
        <Text style={styles.textStyle}>2.Provide your data to step one and click Login/Register</Text>
        <Text style={styles.textStyle}>3.You are now on HomeScreen, there is a list of magazine items there</Text>
        <Text style={styles.textStyle}>4.You can Add items just by clicking the add item on the bottom tab</Text>
        <Text style={styles.textStyle}>5.You can also edit or delete items - Be sure to refresh the list after each operation by draggin the list down</Text>
        <Text style={styles.textStyle}>6.You can check your profile and change your description there or log out from the app</Text>
        <Text style={styles.textStyle}>7.In the drawer tabs you can go back to home screen/open an info screen or check the magazine localization</Text>



      </View>
      

      
    </Box>
  );
};

export default Info;



const styles = StyleSheet.create({
  
  textStyle: {


      color: "#fff",
      textAlign: "center",
      marginTop: 5,
      fontSize: 15

  },

  header: {

    color: "#fff",
      textAlign: "center",
      marginTop: 5,
      fontSize: 15,
    fontSize: 18,
    fontWeight: "bold"
  }
});