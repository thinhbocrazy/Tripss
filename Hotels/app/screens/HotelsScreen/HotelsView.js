import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View, ScrollView, StatusBar, Dimensions} from 'react-native';
import constants from '../../config/constants';
import { HotelItem, NoResults, SearchButton, Loading, Error } from '../../components';
import SearchBar from 'react-native-searchbar';
const { width, height } = Dimensions.get('window');

class HotelsView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <SearchButton navigation={navigation}/>
      ),
  }};

  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
    };
  }

  componentDidMount() {
    const { getHotels } = this.props;
    getHotels(this.props.navigation.state.params.city);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.completed) {
      this.setState({
        hotels: nextProps.hotels,
        completed: nextProps.completed,
        allHotels: nextProps.hotels,
        error: nextProps.error
      });
    }
  }

  getHotel = (id) => {
    this
      .props
      .navigation
      .navigate('Detail', { id });
  };

  render() {
    return (
      <View  style={{ backgroundColor: constants.PRIMARY_BG_COLOR, width, height:(height-45) }}>
        <StatusBar barStyle={constants.BAR_STYLE}/>
        {
          (this.state.completed)?
            (this.state.error?
              <Error/>:
              ((this.state.allHotels && this.state.hotels.length > 0)?
                <ScrollView>
                  {this.state
                    .hotels
                    .map((hotel) => (
                      <HotelItem hotel={hotel} key={hotel._id} event={this.getHotel} />
                    ))}
                </ScrollView>:
                <NoResults/>))
            :
            <Loading/>
        }
      </View>
    );
  }
}

HotelsView.propTypes = {
  getHotels: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  hotels: PropTypes.array.isRequired
};

export default HotelsView;