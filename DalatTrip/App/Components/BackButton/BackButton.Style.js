import { StyleSheet, Dimensions, Platform } from 'react-native'

export default StyleSheet.create({
  TouchableOpacity: {
    height: 32,
    width: 32,
    marginTop: Dimensions.get('window').height / 20,
    marginLeft: Dimensions.get('window').width / 20,
    alignSelf: 'flex-start',
    borderRadius: 100,
    ...Platform.select({
      ios: {
        shadowOpacity: 0.16,
        shadowRadius: 10,
        shadowColor: '#000',
        shadowOffset: {height: 10, width: 0},
        zIndex: 99,
      },
      android: {
      }
    }),

  },
  LinearGradient: {
    height: 32,
    width: 32,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
    flex: 1,
    overflow: 'hidden',
    borderRadius: 100,
    justifyContent: 'center',
  },
  Text: {
    fontSize: 16,
    fontFamily: 'SFProText-Bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    color: '#262B2D',
    lineHeight: 24,
    backgroundColor: 'transparent',
    paddingLeft: 18,
    paddingRight: 30
  },
  BackArrow: {
    height: 15,
    width: 15
  }
})
