import {NativeModules} from 'react-native';
HoiAnAR = NativeModules.HoiAnAR;


const startNewActivity = (packageId) => {
  HoiAnAR.startNewActivity(packageId)
}

export default {startNewActivity}
