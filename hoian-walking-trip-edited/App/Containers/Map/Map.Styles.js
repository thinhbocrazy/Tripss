import { StyleSheet, Platform } from 'react-native'
import { ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: 'transparent'
  },
  center: {
    alignSelf: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1
  },
  mapContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '54%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    alignSelf: 'center',
    zIndex: 99
  },
  bottomCard: {
    alignSelf: 'center',
    width: '100%',
    height: 358,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    overflow: 'visible',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,

    zIndex: 99,
    marginTop: 10,
    ...Platform.select({
      ios: {
        shadowOpacity: 0.16,
        shadowRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          height: -4,
          width: 0
        }
      },
      android: {
      }
    })
  },
  carousel: {
    alignSelf: 'flex-start',
    width: '95%',
    height: '72.6%',
    position: 'absolute',
    bottom: 68,
    overflow: 'visible',
    borderRadius: 16,
    zIndex: 95,
  },
  carouselInfo: {
    alignSelf: 'center',
    width: '87%',
    height: '31%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    overflow: 'visible',
    zIndex: 96,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowColor: '#000',
    shadowOffset: {height: 10, width: 0}
  },
  locationTitle: {
    paddingTop: 6,
    fontSize: 16,
    fontFamily: 'SFProText-Bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    color: '#262B2D',
    lineHeight: 24,
    backgroundColor: 'transparent',
    paddingLeft: 30,
    paddingRight: 30
  },
  locationSubtitle: {
    fontSize: 12,
    fontFamily: 'SFProText-Regular',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    color: '#bdc5c7',
    lineHeight: 18,
    backgroundColor: 'transparent',
    paddingLeft: 30,
    paddingRight: 30
  },
  locationBottomView: {
    marginTop: 6,
    borderTopWidth: 1,
    borderTopColor: '#f4f6f6'
  },
  locationBottomTextDark: {
    fontSize: 12,
    fontFamily: 'SFProText-Bold',
    color: '#262b2d',
    backgroundColor: 'transparent',
  },
  locationBottomTextLight: {
    fontSize: 12,
    fontFamily: 'SFProText-Regular',
    color: '#bdc5c7',
    backgroundColor: 'transparent',
    marginRight: 10
  },
  carouselImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
    borderRadius: 16
  },
  goldNavIcon: {
    width: 12,
    height: 12
  },
  goldStarIcon: {
    width: 12,
    height: 12
  },

})
