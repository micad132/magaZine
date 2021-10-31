import React,{ useState } from 'react';
import {StyleSheet} from 'react-native';
// 1. import `NativeBaseProvider` component
import {View,NativeBaseProvider, Text, Box, Button } from 'native-base';
import Register from './components/RegisterComponent';
import Login from './components/LoginComponent';



export default function App() {
  // 2. Use at the root of your app

   const [current,setCurrent] = useState('Home');
   const registerWindow = (

      <Register/>
   );

  

  const  HomeWindow  =  (


    
    <NativeBaseProvider>

    
    <View style={styles.homeStyle}>
      <Box flex={1}  alignItems="center" justifyContent="center">
        <Login/>
      </Box>

      
      

      <View style={styles.buttonContainer}>

        <Text style = {{color: "white"}}>Don't have an account?</Text>
        <Button style ={styles.inside}
              size="sm"
              variant="link"  onPress={ () => setCurrent(registerWindow)}
            >
              <Text style={styles.fontColor}>REGISTER</Text>
        </Button>
      </View>
      </View>
    </NativeBaseProvider>
    
  );


    return current === 'Home' ? HomeWindow : current;
}






const styles = StyleSheet.create({

    inside: {

        color: "white" ,
        backgroundColor: "yellow",
        width: "70%",
        margin: 10,
        



    },

    fontColor: {
      color: "black",
      
     
    },

    test: {
      backgroundColor: "blue",
    },

    homeStyle: {

      height: "100%",
      width: "100%",
      backgroundColor: "rgb(41,54,63)",
      
    },

    buttonContainer: {

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
});