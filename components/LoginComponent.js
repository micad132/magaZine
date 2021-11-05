import * as React from 'react';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
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
  
} from 'native-base';

const Login = () => {
  return (
    
      <Box  safeArea flex={1} justifyContent="center" alignItems="center" p="2" py="8"  mx="auto" style={{width:"70%"}}>
        <Heading size="lg" fontWeight="600" color="#fff">
          Welcome to MagaZine
        </Heading>
        <Heading mt="1" color="#fff" fontWeight="medium" size="xs">
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
              Email ID
            </FormControl.Label >
            <Input style={{width:"100%", color:"#fff"}} />
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

        <Button title="Login"/>
      </Box>
    
  );
}

export default Login;