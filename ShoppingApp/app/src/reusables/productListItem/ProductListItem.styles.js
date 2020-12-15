import {Dimensions, StyleSheet} from 'react-native';
import Scaling from '../../assets/device/normalize';
import colors from '../../assets/colors';

const {widthScale, heightScale, normalize, moderateScale} = Scaling;

export const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height / 2.5,
    flex: 0.5,
    borderWidth: widthScale(0.5),
    borderColor: colors.blueGray,
  },
  productImage: {
    height: Dimensions.get('screen').height / 3.5,
  },
});
