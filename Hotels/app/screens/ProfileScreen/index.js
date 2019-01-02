import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image
} from 'react-native';
import constants from '../../config/constants';
import Icon from 'react-native-vector-icons/Feather';
import styles from './style.js'

export default class Detail extends Component{
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={{uri: constants.DEFAULT_HOTEL_IMG}} style={styles.backgroundImage}>
          <View style={styles.header}>
            <Image source={require('../../assets/PROFILE_AVATAR.jpg')} style={styles.avatar}></Image>
            <Text style={styles.name}>Trí</Text>
              <Text style={styles.location}>HCMC</Text>
          </View>
        </ImageBackground>
        <View style={styles.first}>
            <Text style={styles.label}>Member Since</Text>
              <Text style={styles.value}>Nov 2018</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>E-mail</Text>
            <Text style={styles.value}>student@gm.uit.edu.vn</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Phone</Text>
            <Text style={styles.value}>+84 9999999</Text>
        </View>
      </View>
    );
  }
}
