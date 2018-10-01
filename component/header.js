import React, {Component} from 'react';
import {Text, View} from 'react-native';


const Header = (props) => {
    const {textStyle, viewStyle} = styles
    return(
        <View style={viewStyle}>
            <Text style={textStyle}> {props.headerText} </Text>
        </View>
    );
}

export default Header;

const styles = {
    viewStyle : {
        backgroundColor: '#F8F8F8',
        alignItems : 'center',
        justifyContent : 'center',
        height : 60,
        paddingTop : 15,
        //Properties for iOS application
        /*shadowColor : '#000',
        shadowOffset : {width : 0, height : 2},
        shadowOppacity : 0.2,*/
        elevation : 2,
        postion : 'relative'
    },
    textStyle : {
      fontSize : 20
    }
  }