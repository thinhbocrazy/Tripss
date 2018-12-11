import React, { Component } from 'react'
import {
  Dimensions,
  ScrollView,
  Text,
  Image,
  View,
  AsyncStorage,
  TouchableOpacity,
  Platform
} from 'react-native'
import { Images } from '../../Themes/index'
import styles from './Main.Styles'

import AppStatusBar from '../../Components/AppStatusBar/AppStatusBar.View'
import AppButton from '../../Components/AppButton/AppButton.View'

import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel'
import MainStyles from './Main.Styles'
import I18n from '../../I18n/'
import HoiAnAR from '../../Lib/HoiAnAR'

const {width, height} = Dimensions.get('window')

export default class MainScreen extends Component {
  state: State = {
    entries: [
      {
        id: 'food',
        title: 'category.food.title',
        desc: 'category.food.desc',
        source: Images.category.food.main,
        numOf: 'category.food.more_places',
        test: 'category.food.more_info'
      },
      {
        id: 'place',
        title: 'category.place.title',
        desc: 'category.place.desc',
        source: Images.category.place.main,
        numOf: 'category.place.more_places',
        test: 'category.place.more_info'
      },
      {
        id: 'shop',
        title: 'category.shop.title',
        desc: 'category.shop.desc',
        source: Images.category.shop.main,
        numOf: 'category.shop.more_places',
        test: 'category.shop.more_info'
      },
      {
        id: 'hotel',
        title: 'category.hotel.title',
        desc: 'category.hotel.desc',
        source: Images.category.hotel.main,
        numOf: 'category.hotel.more_places',
        test: 'category.hotel.more_info'
      }
    ],
    activeSlide: 0,
    lang: 'EN'
  }

  componentDidMount () {
    AsyncStorage.getItem('languageCode', (err, result) => {
      if (result === 'VI') {
        this.setState({lang: 'VI'})
      } else {
        this.setState({lang: 'EN'})
      }
    })
  }

  get pagination () {
    const {entries, activeSlide} = this.state
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        dotStyle={MainStyles.paginationDots}
        inactiveDotStyle={{
          backgroundColor: 'rgb(226,229,234)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
      />
    )
  }

  get morePlaces () {
    const full = I18n.t(
      this.state.entries[
        this._carousel != null ? this._carousel.currentIndex : 0
        ].numOf
    )
    const firstHalf = full.substr(0, full.indexOf('+') - 1)
    const secondHalf = full.substr(full.indexOf('+'))
    const number =
      I18n.t(
        this.state.entries[
          this._carousel != null ? this._carousel.currentIndex : 0
          ].test
      ).length - 1
    return firstHalf + secondHalf
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <AppStatusBar barStyle={'dark-content'}/>
        <View style={styles.toolBar}>
          <TouchableOpacity
            onPress={this.languageToggle}
            style={{
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image
              source={Images.images.lang}
              style={{
                width: 25,
                height: 25
              }}
            />
            <Text style={styles.languageChangeButton}>{this.state.lang}</Text>
          </TouchableOpacity>

          {Platform.OS === 'android' ? (
            <TouchableOpacity
              style={{position: 'absolute', right: 0, padding: 10}}
              onPress={() => {
                HoiAnAR.startNewActivity('com.nhancv.hoianar')
              }}
            >
              <Image
                source={Images.images.cameraIcon}
                style={styles.cameraIcon}
              />
            </TouchableOpacity>
          ) : null}
        </View>

        <View style={styles.backLayout}>
          <Image source={Images.images.homeBg} style={styles.homeBg}/>
          <View style={styles.whiteBottom}>
            <Text style={MainStyles.descriptionHeading}>{this.morePlaces}</Text>
            <ScrollView>
              <Text style={MainStyles.descriptionBody}>
                {I18n.t(
                  this.state.entries[
                    this._carousel != null ? this._carousel.currentIndex : 0
                    ].desc
                )}
              </Text>
            </ScrollView>
          </View>
        </View>
        <View style={{flex: 1}}>
          <Carousel
            style={{
              flex: 1,
              backgroundColor: 'red'
            }}
            ref={c => {
              this._carousel = c
            }}
            data={this.state.entries}
            renderItem={({item, index}, parallaxProps) => {
              return (
                <View
                  style={{
                    flex: 1,
                    borderRadius: 16,
                    overflow: 'hidden',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'black',
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                >
                  <View style={styles.cardButtonTextGroup}>
                    <Text style={styles.categoryTitle}>
                      {I18n.t(item.title)}
                    </Text>
                    <AppButton
                      onPress={() => {
                        this.props.navigation.navigate('MapScreen', {
                          category: index
                        })
                      }}
                      text={I18n.t('buttonText')}
                    />
                  </View>
                  <ParallaxImage
                    source={item.source}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.2}
                    {...parallaxProps}
                  />
                </View>
              )
            }}
            layout={'default'}
            firstItem={0}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            sliderWidth={width}
            itemWidth={width - 70}
            hasParallaxImages={true}
            onSnapToItem={index => this.setState({activeSlide: index})}
          />
          {this.pagination}
        </View>
        <View style={{height: 160}}/>
        {/*..........*/}
      </View>
    )
  }

  languageToggle = () => {
    if (this.state.lang === 'EN') {
      AsyncStorage.setItem('languageCode', 'VI', (err, result) => {
        I18n.initLanguage('vi')
        this.setState({lang: 'VI'})
      })
    } else {
      AsyncStorage.setItem('languageCode', 'EN', (err, result) => {
        I18n.initLanguage('en')
        this.setState({lang: 'EN'})
      })
    }
  }
}
