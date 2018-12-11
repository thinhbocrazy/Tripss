import React, { Component } from 'react'
import {
  Dimensions,
  Text,
  Image,
  View,
  BackHandler,
  ScrollView
} from 'react-native'
import { Header } from 'native-base'
import { Images } from '../../Themes/index'
import styles from './Detail.Styles'
import I18n from '../../I18n/'

import AppStatusBar from '../../Components/AppStatusBar/AppStatusBar.View'
import BackButton from '../../Components/BackButton/BackButton.View'
import HeaderImageScrollView from 'react-native-image-header-scroll-view'

const MIN_HEIGHT = Header.HEIGHT
const MAX_HEIGHT = Dimensions.get('window').height / 1.5

export default class DetailScreen extends Component {

  state: State = {
    categoryId: 0,
    index: 0,
    entries: [
      {
        id: 'food',
        more_info: 'category.food.more_info',

      },
      {
        id: 'place',
        more_info: 'category.place.more_info',

      },
      {
        id: 'shop',
        more_info: 'category.shop.more_info',

      },
      {
        id: 'hotel',
        more_info: 'category.hotel.more_info',

      }

    ],
  }

  componentDidMount () {
    const {categoryId, index} = this.props.navigation.state.params
    this.setState({categoryId: categoryId, index: index})

    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack()
      return true
    })
  }

  componentWillUnmount () {
    this.backHandler.remove()
  }

  render () {
    let imageName = I18n.t('category.' + this.state.entries[this.state.categoryId].id + '.more_info.' + this.state.index + '.image')
    let category = this.state.entries[this.state.categoryId]
    let moreInfo = I18n.t(category.more_info)[this.state.index]
    let {
      name,
      location,
      desc,
      menu,
    } = moreInfo

    let descriptionTitle = I18n.t('headerTitles.description'),
      locationTitle = I18n.t('headerTitles.location'),
      menuTitle = I18n.t(this.state.entries[this.state.categoryId].id) === 'food' ? I18n.t('headerTitles.menu') : ''

    return (
      <View style={styles.mainContainer}>
        <AppStatusBar barStyle={'dark-content'}/>
        {/*1st layer*/}
        <View style={styles.baseLayer}>
          <HeaderImageScrollView
            maxHeight={MAX_HEIGHT}
            minHeight={MIN_HEIGHT}
            renderHeader={() => <Image source={Images.category[this.state.entries[this.state.categoryId].id][imageName]}
                                       style={styles.homeBackgroundImage}/>}
            scrollViewBackgroundColor="rgba(0,0,0,0.5)"
            showsVerticalScrollIndicator={false}
          >
            <View>
              <View style={styles.header}>
                <Text style={styles.subtitle}>
                  {I18n.t('headerTitles.' + this.state.entries[this.state.categoryId].id)}
                </Text>
                <Text style={styles.title}>
                  {name}
                </Text>
              </View>

              <View style={styles.details}>
                <Text style={styles.description}>{descriptionTitle}</Text>
                <Text style={styles.content}>
                  {desc}
                </Text>

                <Text style={styles.location}>{locationTitle}</Text>
                <Text style={styles.address}>
                  {location}
                </Text>

                <Text style={styles.menu}>{menuTitle}</Text>
                <Text style={styles.menu_detail}>{menu}</Text>
              </View>
            </View>
          </HeaderImageScrollView>
        </View>
        {/*2nd layer*/}
        <View
          style={styles.backButton}>
          <BackButton
            onPress={() => {
              this.props.navigation.goBack()
            }}
          />
        </View>
      </View>
    )
  }
}
