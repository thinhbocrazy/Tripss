import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../screens/DetailScreen/style';
import { View, Text } from 'react-native';

export default class Amenities extends Component {
  render() {
    const hotel = this.props.hotel;
    const fontColor = '#676767';
    const marginTop = -4;
    return (
      <View style={styles.amenities}>
        {
          hotel.amenities.wifi?
              <Text style={styles.value}>Wi-Fi</Text>
            :null
        }
        {
          hotel.amenities.pool?
              <Text style={styles.value}>Pool</Text>
              :null
        }
        {
          hotel.amenities.spa?
              <Text style={styles.value}>Spa</Text>
              :null
        }
        {
          hotel.amenities.parking?
              <Text style={styles.value}>Parking</Text>
              :null
        }
        {
          hotel.amenities.ac?
              <Text style={styles.value}>A/C</Text>
              :null
        }
        {
          hotel.amenities.restaurant?
              <Text style={styles.value}>Restaturant</Text>
            :null
        }
        {
          hotel.amenities.bar?
              <Text style={styles.value}>Bar</Text>
            :null
        }
        {
          hotel.amenities.gym?
              <Text style={styles.value}>Gym</Text>
            :null
        }
      </View>
    );
  }
};
