import React,{Component} from 'react';
import {Text, View, Image} from 'react-native';




const Card = (props) => {
    const {containerStyle} = styles
    return(
        <View style = {containerStyle}>
            {props.children}
        </View>
    );
}
export default Card;

const styles = {
    containerStyle : {
        borderWidth : 1,
        borderRadius: 2,
        bottomBorderWidth : 0,
        borderColor : '#ddd',
        elevation : 1,
        marginLeft : 5,
        marginRight : 5,
        marginTop : 10

    }
}