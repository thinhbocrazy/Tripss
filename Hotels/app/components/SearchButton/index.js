import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  TouchableOpacity,
  Image
} from 'react-native'

export default class SearchButton extends Component {
  render() {
    return (
      <TouchableOpacity size={25} backgroundColor="transparent" underlayColor="transparent" onPress={() => {
        if (this.props.navigation.searchBar.state.show) {
          this.props.navigation.searchBar.hide();
        } else {
          this.props.navigation.searchBar.show();
        }
      }}>
      <Image source={require('../../assets/Search.jpg')}></Image>
      </TouchableOpacity>
    );
  }
};
