import { StyleSheet, Dimensions } from 'react-native'
import { ApplicationStyles } from '../../Themes'

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: 'transparent'
  },
  center: {
    alignSelf: 'center'
  },
  description: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    color: '#262b2d',
    fontFamily: 'SFProText-Bold',
    marginTop: 5
  },
  content: {
    lineHeight: 24,
    fontSize: 16,
    fontFamily: 'SFProText-Regular',
  },
  location: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    color: '#262b2d',
    fontFamily: 'SFProText-Bold',
    marginTop: 5
  },
  address: {
    lineHeight: 24,
    fontSize: 16,
    fontFamily: 'SFProText-Regular',
  },
  menu: {
    lineHeight: 24,
    fontSize: 16,
    fontFamily: 'SFProText-Bold',
    color: '#262b2d',
    marginTop: 5
  },
  title: {
    color: '#FFF',
    fontFamily: 'SFProText-Bold',
    fontSize: 22,
    lineHeight: 36
  },
  subtitle: {
    color: '#FFF',
    fontFamily: 'SFProText-Semibold',
    fontSize: 14,
    lineHeight: 21
  },
  baseLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  homeBackgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: height * 2 / 3,
    resizeMode: 'cover'
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingBottom: 30,
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20
  },
  details: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    alignSelf: 'center',
    zIndex: 99
  },
  menu_detail: {
    fontSize: 16,
    fontFamily: 'SFProText-Regular',
    lineHeight: 24,
    marginBottom: 10
  }
})
