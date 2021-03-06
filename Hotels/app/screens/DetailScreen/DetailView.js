import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, StatusBar, Text, Dimensions, Image } from 'react-native';
import constants from '../../config/constants';
import { ShareButton, Amenities, Contact, LoadingDetail, ErrorDetail } from '../../components';
import Icon from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';
import styles from './style.js';
const { width } = Dimensions.get('window');

class DetailView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <ShareButton navigation={navigation}/>
      ),
    }};

  constructor(props) {
    super(props);
    this.state = {
      hotel: {amenities:{}, images:[]},
    };
  }

  componentDidMount() {
    const { getHotel } = this.props;
    getHotel(this.props.navigation.state.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.completed) {
      this.setState({
        hotel: nextProps.hotel,
        completed: nextProps.completed,
        error: nextProps.error
      });
      if (!this.props.navigation.state.params.hotel) {
        this.props.navigation.setParams({hotel: nextProps.hotel}) ;
      }
    }
  }

  _renderImage ({item}) {
    return (
      <Image source={{uri:item}} style={styles.carousel}></Image>
    );
  }

  render() {
    const fontColor = '#676767';
    const marginTop = -4;
    const hotel = this.state.hotel;
    return (
      <View style={styles.container}>
        <StatusBar barStyle={constants.BAR_STYLE}/>
        {
          this.state.completed?
            (this.state.error?<ErrorDetail/>:
              <View style={styles.container}>
              <ScrollView>
                <View style={styles.carousel}>
                  <Carousel
                    data={hotel.images}
                    renderItem={this._renderImage}
                    sliderWidth={width}
                    itemWidth={width}
                    itemHeight={320}
                    sliderHeight={320}
                    activeAnimationType={'spring'}
                  />
                </View>
                  <Text style={styles.small} >{hotel.images.length} photos</Text>
                <Text style={styles.name}>{hotel.name}</Text>
                <View style={styles.about}>
                  <Text style={styles.label}>About</Text>
                  <Text style={[styles.value, styles.description]}>{hotel.description}</Text>
                </View>
                <View style={styles.field}>
                  <Text style={styles.label}></Text>
                </View>
                <View style={styles.location}>
                  <Text style={[styles.label,{paddingLeft:20}]}>Location</Text>
                    <Text style={styles.value}>{hotel.address}</Text>
                  <Text style={[styles.value,{paddingLeft:70, marginTop:-10}]}>{hotel.city}, {hotel.country}</Text>
                </View>
                <View style={styles.field}>
                  <Text style={styles.label}>Amenities</Text>
                  <Amenities hotel={hotel}/>
                </View>
                <View style={styles.field}>
                  <Text style={styles.label}>Contact</Text>
                  <Contact hotel={hotel}/>
                </View>
                <View style={styles.field}>
                  <Text style={styles.label}></Text>
                </View>
              </ScrollView>
                <Text style={styles.bookingButton} onPress={()=>{alert('Booking feature not working yet')}}>Booking Now</Text>
            </View>):
            <LoadingDetail/>
        }
      </View>
    );
  }
}

DetailView.propTypes = {
  getHotel: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  hotel: PropTypes.object.isRequired
};

export default DetailView;