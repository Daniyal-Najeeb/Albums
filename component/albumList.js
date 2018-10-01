import React,{Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetails from './albumDetails'



class AlbumList extends Component{
    //Intializing State of an empty album array
    state = { albums : [] };
    
    //Fetching data into albums
    //this.setstate update the intial album state and add fetch data into album array
    componentWillMount()
    {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({albums : response.data}));
    }

    renderAlbumList()
    {
        console.log(this.state.albums);
        return this.state.albums.map(album =>
            
            <AlbumDetails key={album.title} album={album} />
        );
        
    }
    //Rendering View
    render(){
        return(
            <ScrollView>{this.renderAlbumList()}</ScrollView>
        );
    }
}
export default AlbumList;