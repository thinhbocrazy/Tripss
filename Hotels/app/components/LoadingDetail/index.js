import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default class LoadingDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading</Text>
      </View>
    );
  }
}
