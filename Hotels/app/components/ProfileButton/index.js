import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  TouchableOpacity,
  Image
} from 'react-native'

export default class ProfileButton extends Component {
  render() {
    return (
      <TouchableOpacity size={25} backgroundColor="transparent" underlayColor="transparent" onPress={() => this.props.navigation.navigate('Profile')}>
      <Image source={require('../../assets/profile.jpg')}></Image>
      </TouchableOpacity>
    );
  }
};
