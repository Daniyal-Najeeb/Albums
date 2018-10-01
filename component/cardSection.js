import React,{Component} from 'react';
import {View} from 'react-native';




const CardSection = (props) => {
    const {containerStyle} = styles
    return(
        <View style={containerStyle}>
            {props.children}
        </View>
    );
}
export default CardSection;

const styles = {
   containerStyle : {
       backgroundColor : '#fff',
       justifyContent : 'flex-start',
       flexDirection : 'row', 
       bottomBorderWidth : 1,
       borderColor : '#ddd',
       padding : 5,
       position : 'relative'
   }
}