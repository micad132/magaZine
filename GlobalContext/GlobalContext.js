import React, {useContext} from 'react';

import { StyleSheet } from 'react-native';


export const Context = React.createContext();



export function GlobalContext({children}){


    return (

        <Context.Provider value={{Styles}}>


            {children}
        </Context.Provider>
    );

}


const Styles = StyleSheet.create( {


    buttonStyle: {

        color: "white" ,
        backgroundColor: "yellow",
        width: "70%",
        margin: 10,
    },

    buttonText:{

        color: "black",
    }



})