import React, { Component } from 'react'
import { Text, Image, View, AsyncStorage } from 'react-native'
import { Images } from '../../Themes/index'
import SplashScreen from 'react-native-splash-screen'
import AppStatusBar from '../../Components/AppStatusBar/AppStatusBar.View'
import AppButton from '../../Components/AppButton/AppButton.View'
import I18n from '../../I18n/'
// Styles launch-icon
import styles from './Launch.Styles'

export default class LaunchScreen extends Component {
  state: State = {
    render: false
  }

  render () {
    return (
      !this.state.render ? null : <View style={styles.mainContainer}>
        <AppStatusBar/>
        <Image source={Images.images.launch} style={styles.backgroundImage}/>
        <View style={styles.mainContainer}>
          <Text style={{
            fontFamily: 'SFProText-Bold',
            lineHeight: 24,
            color: 'white',
            marginTop: 44,
            marginLeft: 33,
            fontSize: 16
          }}>
            H O I A N
          </Text>
          <Text style={{
            fontFamily: 'SFProText-Semibold',
            lineHeight: 50,
            color: 'white',
            marginLeft: 33,
            fontSize: 40,
            width: 295
          }}>
            The Ancient Town
          </Text>
          <AppButton text={'TAKE A TOUR'} onPress={this.takeATour} styles={{
            position: 'absolute',
            bottom: 88
          }}/>
        </View>
      </View>
    )
  }

  checkFirst = () => {
    AsyncStorage.getItem('isFirstLaunch', (err, result) => {
        if (result === '1') {
          this.goToMainScreen()
        } else {
          this.setState({render: true})
        }
      }
    )
  }

  takeATour = () => {
    AsyncStorage.setItem('isFirstLaunch', '1', (err, result) => {
      this.goToMainScreen()
    })
  }

  goToMainScreen = () => {
    this.props.navigation.navigate('MainScreen', {})
  }

  checkLanguage = () => {
    AsyncStorage.getItem('languageCode', (err, result) => {
        if (result === 'VI') {
          I18n.initLanguage('vi')
        } else {
          I18n.initLanguage('en')
        }
        this.checkFirst()
      }
    )
  }

  componentDidMount () {
    SplashScreen.hide()
    this.checkLanguage()
  }

}
