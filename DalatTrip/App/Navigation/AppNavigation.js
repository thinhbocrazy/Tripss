import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/Launch/Launch.Screen'
import MainScreen from '../Containers/Main/Main.Screen'
import MapScreen from '../Containers/Map/Map.Screen'
import DetailScreen from '../Containers/Detail/Detail.Screen'
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    MainScreen: { screen: MainScreen },
    MapScreen: { screen: MapScreen },
    DetailScreen: { screen: DetailScreen }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
      headerStyle: styles.header,
      gesturesEnabled: false,
    }
  }
)


export default PrimaryNav
