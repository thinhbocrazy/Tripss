import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes'

const entryBorderRadius = 16
const bottomHeight = 307

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  imageContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  image: {
    resizeMode: 'cover',
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
    borderBottomLeftRadius: entryBorderRadius,
    borderBottomRightRadius: entryBorderRadius,
    zIndex: 20,
    width: '100%',
    height: '100%'
  },
  center: {
    alignSelf: 'center'
  },
  paginationDots: {
    width: 9,
    height: 9,
    borderRadius: 3,
    marginHorizontal: 0,
    backgroundColor: 'rgba(235, 210, 150, 0.92)'
  },
  descriptionHeading: {
    fontFamily: 'SFProText-Bold',
    color: 'rgb(189,197,199)',
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 10,
    marginTop: 130,
    fontSize: 16
  },
  descriptionBody: {
    fontFamily: 'SFProText-Regular',
    lineHeight: 24,
    color: 'rgb(38,43,45)',
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 24,
    fontSize: 16
  },
  categoryTitle: {
    position: 'relative',
    color: 'rgb(255,255,255)',
    fontSize: 24,
    fontFamily: 'SFProText-Semibold',
    alignSelf: 'center',
    marginBottom: 15,
    textAlign: 'center'
  },
  languageChangeButton: {
    fontFamily: 'SFProText-Semibold',
    fontSize: 15,
    color: 'gray'
  },
  cardButtonTextGroup: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    position: 'relative',
    zIndex: 99,
    flex: 1,
    width: '90%',
    paddingBottom: 20
  },
  homeBg: {
    flex: 1,
    resizeMode: 'cover'
  },
  toolBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    zIndex: 99,
    marginLeft: 20,
    marginRight: 20
  },
  cameraIcon: {width: 25, height: 25, marginRight: 10},
  backLayout: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  whiteBottom: {
    height: bottomHeight,
    backgroundColor: 'white'
  }
})
