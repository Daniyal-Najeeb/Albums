import React,{Component} from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './card'
import CardSection from './cardSection'
import Button from './button'


const AlbumDetails = ({album}) => {
    {/* Styles */}
    const {textStyle, artistStyle, titleStyle, thumbnailStyle, thumbnailViewStyle, imageStyle, buttonViewStyle ,buttonStyle} = styles
    {/* props */}
    const {title, artist, thumbnail_image, image, url} = album
    return(
        <Card>
            {/*Header Section */}
            <CardSection>
                <View style={thumbnailViewStyle}>
                    <Image
                     style={thumbnailStyle}
                     source ={ {uri : thumbnail_image} }
                    />
                </View>
                    <View style={textStyle}>
                        <Text style={titleStyle}>{title}</Text>
                        <Text style={artistStyle}>{artist}</Text>
                    </View>
            </CardSection> 
             {/*Body Section */}
            <CardSection>
                    <Image
                     style={imageStyle}
                     source ={ {uri : image} }
                    />
            </CardSection>
            {/* Footer Section */}
            <CardSection>
                <View style={buttonViewStyle} >
                    <Button onPress ={() => Linking.openURL(url)}>Buy Now</Button>
                </View>
            </CardSection>
        </Card>
    );
}
export default AlbumDetails;
const styles = {
    thumbnailViewStyle :{
        justifyContent : 'center',
        alignItem : 'center',
        marginLeft : 10,
        marginRight : 10
    },
    thumbnailStyle : {
        height : 50,
        width: 50
    },
    textStyle :{
        justifyContent : 'space-around',
        flexDirection : 'column'
    },
    titleStyle : {
        fontSize : 16,
    },
    artistStyle : {
        fontSize : 12,
    },
    imageStyle : {
        height : 300,
        flex : 1,
        width : null
    },
    buttonViewStyle :{
        flex : 1,
        width : null,
    },
    buttonStyle : {
        outline : 'none',
        fontColor : 'blue'
    }
}