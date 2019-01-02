import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, ImageBackground } from 'react-native';
import StarRating from 'react-native-star-rating';
import constants from '../../config/constants';
import styles from './style';

const HotelItem = ({ hotel, event }) => (
  <TouchableHighlight onPress={() => event(hotel._id)}>
    <View style={styles.container}>
      <ImageBackground source={{uri: hotel.images[Math.floor(Math.random() * hotel.images.length)] || constants.DEFAULT_HOTEL_IMG}} style={styles.backgroundImage}>
        <View style={styles.listitem}>
          <Text style={styles.price}>USD {hotel.price} per night</Text>
          <Text style={styles.title}>{hotel.name}</Text>
            <Text style={styles.subtitle}>Star rating: {hotel.stars}</Text>
        </View>
      </ImageBackground>
    </View>
  </TouchableHighlight>
);

HotelItem.propTypes = {
  hotel: PropTypes.object.isRequired,
  event: PropTypes.func.isRequired,
};

export default HotelItem;