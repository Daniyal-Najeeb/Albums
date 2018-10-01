import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from './component/header';
import AlbumList from './component/albumList';


const App = () => (
  <View style={{flex : 1}}>
  <Header headerText={'Albums'} />
  <AlbumList />
  </View>
)
export default App;

