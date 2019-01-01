import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../../screens/DetailScreen/style';
import { View, Text } from 'react-native';

export default class Contact extends Component {
  render() {
    const hotel = this.props.hotel;
    const fontColor = '#676767';
    const marginTop = -4;
    return (
      <View>
          <Text style={styles.value}>>Website: {hotel.website}</Text>
          <Text style={styles.value}>>Email: {hotel.email}</Text>
          <Text style={styles.value}>>Phone: {hotel.phone}</Text>
      </View>
    );
  }
};
