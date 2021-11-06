import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../components/Login/LoginComponent';
import Register from '../components/Login/RegisterComponent';
const screens = {
    Login: {
        screen: Login
    },
    Register: {
        screen: Register
    }
}
const Screens = createStackNavigator(screens);
export default createAppContainer(Screens);
