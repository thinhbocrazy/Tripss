import React, { PureComponent } from 'react'
import {
  Dimensions,
  Text,
  Image,
  View,
  BackHandler,
  TouchableOpacity,
  NetInfo, Platform
} from 'react-native'
import { Images } from '../../Themes/index'
import styles from './Map.Styles'
import MapView from 'react-native-maps'
import AppStatusBar from '../../Components/AppStatusBar/AppStatusBar.View'
import BackButton from '../../Components/BackButton/BackButton.View'
import Carousel from 'react-native-snap-carousel'
import I18n from '../../I18n/'
import geolib from 'geolib'

export default class MapScreen extends PureComponent {
  state: State = {
    region: {
      latitude: 15.86,
      longitude: 108.333,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    currentMarker: 0,
    markers: [
      {
        key: 0,
        coordinate: {
          latitude: 15.913796,
          longitude: 108.3386063
        },
        title: 'An Bang Beach',
        subtitle: 'Place'
      }
    ],
    latitude: null,
    longitude: null,
    error: null,
    categoryId: 0,
    slideIndex: 0,
    entries: [
      {
        id: 'food',
        title: 'category.food.title',
        desc: 'category.food.desc',
        more_info: 'category.food.more_info',
        source: Images.category.food
      },
      {
        id: 'place',
        title: 'category.place.title',
        desc: 'category.place.desc',
        more_info: 'category.place.more_info',
        source: Images.category.place
      },
      {
        id: 'shop',
        title: 'category.shop.title',
        desc: 'category.shop.desc',
        more_info: 'category.shop.more_info',
        source: Images.category.shop
      },
      {
        id: 'hotel',
        title: 'category.hotel.title',
        desc: 'category.hotel.desc',
        more_info: 'category.hotel.more_info',
        source: Images.category.hotel
      }

    ],
    isReady: false,
    isNetOk: true,
    isMapReady: false
  }

  handleConnectivityChange = (connectionInfo) => {
    if (connectionInfo.type === 'none') {
      if (this.state.isNetOk === true) {
        this.setState({isNetOk: false})
      }
    } else {
      if (this.state.isNetOk === false) {
        this.setState({isNetOk: true})
      }
    }
  }

  componentDidMount () {
    const {params} = this.props.navigation.state

    NetInfo.getConnectionInfo().then((connectionInfo) => {
      if (connectionInfo.type === 'none') {
        if (this.state.isNetOk === true) {
          this.setState({isNetOk: false})
        }
      } else {
        if (this.state.isNetOk === false) {
          this.setState({isNetOk: true})
        }
      }
    })

    NetInfo.addEventListener(
      'connectionChange',
      this.handleConnectivityChange
    )

    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack()
      return true
    })

    setTimeout(() => {
      this.setState({
        categoryId: params.category,
        isReady: true
      }, () => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            })
          },
          (error) => {

          },
        )
      })
    }, Platform.OS === 'ios' ? 350: 200)

  }

  componentWillUnmount () {
    this.backHandler.remove()
    NetInfo.removeEventListener(
      'connectionChange',
      this.handleConnectivityChange
    )
  }

  _calDistance = (userLat, userLong, desLat, desLong) => {

    if (userLat === null || userLong === null) {
      return 'N/A'
    }
    let dist = geolib.getDistance(
      {latitude: userLat, longitude: userLong},
      {latitude: desLat, longitude: desLong}
    )
    return dist < 1000
      ? dist.toString() + ','
      : Math.floor(dist / 1000).toString() + 'km'
  }

  _renderItem ({item, index}) {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('DetailScreen', {
            categoryId: this.state.categoryId,
            index: index
          })
        }}
        style={styles.carousel}
      >
        <Image
          style={styles.carouselImage}
          source={this.state.entries[this.state.categoryId].source[item.image]}
        />
        <View style={styles.carouselInfo}>
          <Text style={styles.locationTitle} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.locationSubtitle}>{item.type}</Text>
          <View style={styles.locationBottomView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 4
              }}
            >
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Image
                  source={Images.images.goldStar}
                  style={styles.goldStarIcon}
                />
                <Text style={styles.locationBottomTextDark}>{item.rating}</Text>
                <Text style={styles.locationBottomTextLight}>
                  {' '}
                  ({item.peoplerated})
                </Text>

                <Image
                  source={Images.images.goldNav}
                  style={styles.goldNavIcon}
                />
                <Text style={styles.locationBottomTextDark}>
                  {this._calDistance(
                    this.state.latitude,
                    this.state.longitude,
                    item.loc.lat,
                    item.loc.long
                  )}
                </Text>
              </View>

            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  _renderNoNetwork = () => {
    return (
      <Text>
        {I18n.t('nonetwork')}
      </Text>
    )
  }

  _renderMap = () => {

    return (
      <MapView
        style={styles.map}
        initialRegion={this.state.region}
        loadingEnabled={true}
        ref={ref => (this.map = ref)}
        onMapReady={() => {
          this.setState({isMapReady: true}, () => {
            this.goToLocation(this.state.slideIndex)
          })
        }}
      >
        {this.state.markers.map(marker => (
          <MapView.Marker
            key={marker.key}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.subtitle}
            ref={ref => (this.mapmarkers = ref)}
          />
        ))}
      </MapView>
    )

  }

  goToLocation = slideIndex => {
    let dataSource = this.state.entries[this.state.categoryId].more_info
    let r = {
      latitude: I18n.t(dataSource + '.' + slideIndex + '.loc.lat'),
      longitude: I18n.t(dataSource + '.' + slideIndex + '.loc.long'),
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    }
    this.setState({
      slideIndex: slideIndex,
      markers: [
        {
          key: 0,
          coordinate: {
            latitude: r.latitude,
            longitude: r.longitude
          },
          title: I18n.t(dataSource + '.' + slideIndex + '.name'),
          subtitle: I18n.t(dataSource + '.' + slideIndex + '.type')
        }
      ]
    }, () => {
      setTimeout(() => {
        if (this.mapmarkers) this.mapmarkers.showCallout()
        if (this.map) this.map.animateToRegion(r, 1000)
      }, 100)
    })
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <AppStatusBar barStyle={'dark-content'}/>
        <View style={styles.mapContainer}>
          {
            this.state.isReady ?
              this.state.isMapReady || this.state.isNetOk ?
                this._renderMap() : this._renderNoNetwork()
              : null

          }
        </View>
        <View
          style={styles.backButton}>
          <BackButton
            onPress={() => {
              this.props.navigation.goBack()
            }}
          />
        </View>
        <View style={styles.bottomCard}>
          {
            this.state.isReady ?
              <Carousel
                data={I18n.t(this.state.entries[this.state.categoryId].more_info)}
                renderItem={this._renderItem.bind(this)}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width * 0.84}
                firstItem={this.state.slideIndex}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                onSnapToItem={slideIndex => {
                  this.goToLocation(slideIndex)
                }}
              /> : null
          }

        </View>
      </View>
    )
  }
}
