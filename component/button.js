import React,{Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';


const Button = ({onPress, children}) => {
    const {buttonStyle, textStyle} = styles
    return(
        <TouchableOpacity onPress = {onPress}  style={buttonStyle}>
        <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = {
    buttonStyle : {
        flex : 1,
        alignSelf : 'stretch',
        backgroundColor : '#fff',
        borderRadius : 5,
        borderWidth : 1,
        borderColor : 'white',
        marginLeft : 5,
        marginRight : 5
    },
    textStyle:{
        alignSelf : 'center',
        fontSize : 20,
        color : '#007aff',
        fontWeight : '600',
        paddingTop : 10,
        paddingBottom : 10
    }
}