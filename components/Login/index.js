import React from 'React';

import Login from './LoginComponent';
import Register from './RegisterComponent';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();


export default function Login() {





    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen

                    name="Login"
                    component={Login}

                    >

                        


                    </Stack.Screen>
                <Stack.Screen

                    name="Register"
                    component={Register}


                />


            </Stack.Navigator>




        </NavigationContainer>





    );
}
