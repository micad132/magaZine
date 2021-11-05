import   React,{useState} from 'react';
import { StyleSheet } from 'react-native';
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
  View
  
} from 'native-base';
import { padding } from 'styled-system';

const Login = () => {


  const [login,setLogin] = useState("user");
  return (
    
      <Box  safeArea flex={1} justifyContent="center" alignItems="center" p="2" py="8"  mx="auto" style={{width:"70%",height:"100%",position:"relative",backgroundColor:"rgb(41,54,63)"}} >
        
        <View style={{width: "100%",marginBottom: 50}}>
        <Heading size="lg" fontWeight="600" color="#fff" style={{textAlign:"center"}}>
          Welcome to MagaZine
        </Heading>
        <Heading mt="1" color="#fff" fontWeight="medium" size="xs" style={{textAlign:"center"}} >
          Login to continue!
        </Heading>

        <VStack space={3} mt="5" style={{width:"100%"}}>
          <FormControl style={{width:"100%"}}>
            <FormControl.Label
              _text={{
                color: '#fff',
                fontSize: 'xs',
                fontWeight: 500,
              }}>
              Login
            </FormControl.Label >
            <Input style={{width:"100%", color:"#fff"}} onChangeText={ (val) => setLogin(val)} />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                color: '#fff',
                fontSize: 'xs',
                fontWeight: 500,
              }}>
              Password
            </FormControl.Label>
            <Input type="password" style={{color: "#fff"}} />
            
          </FormControl>
          
          
        </VStack>
          <View style={styles.loginBtnContainer}>

            <Text style={[styles.buttonText,{textAlign:"center",marginBottom:10}]}> Hello {login}!</Text>
            <Button   style ={styles.buttonLoginStyle} >
              
                <Text style={styles.buttonText}> LOGIN</Text>  
            </Button>
          </View>
        </View>
        <View style={styles.buttonContainer}>

          <Text style = {{color: "white"}}>Don't have an account?</Text>
          <Button style ={styles.buttonRegisterStyle}
                size="sm"
                variant="link"  
              >
                <Text style={styles.buttonText}>REGISTER</Text>
          </Button>
        </View>
      </Box>
    
  );
}

export default Login;


const styles = StyleSheet.create({

  buttonRegisterStyle: {

       
      backgroundColor: "rgb(110,217,161)",
      width: "70%",
      margin: 10,
      



  },

  buttonLoginStyle:{

      width:"70%",
      marginLeft:"auto",
      marginRight:"auto",
      backgroundColor:"rgb(110,217,161)",
      paddingTop: 10,
      paddingBottom: 10,

  },

  buttonText: {
    color: "#fff",
    fontSize: 14,
    
    
   
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
    width: "90%",
    position: "absolute",
    bottom: 20,

  },

  loginBtnContainer: {
      width: "100%",
      marginTop: 20,
      paddingTop:30,
      paddingBottom:30,
      color: "#fff",
     
  }
});