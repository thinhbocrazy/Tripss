import React, { Component } from 'react';
import { Share, TouchableOpacity, Image } from 'react-native';

export default class ShareButton extends Component {
  render() {
    return (
      <TouchableOpacity name="share" size={23} backgroundColor="transparent" underlayColor="transparent" onPress={()=>{
        const hotel = this.props.navigation.state.params.hotel;
        if (hotel && hotel._id) {
          Share.share({title:hotel.name, message:`${hotel.name}: ${hotel.description}`, url: hotel.website}, {subject:hotel.name});
        }
        
      }}>
      <Image source={require('../../assets/Share.jpg')}></Image>
      </TouchableOpacity>
    );
  }
};
