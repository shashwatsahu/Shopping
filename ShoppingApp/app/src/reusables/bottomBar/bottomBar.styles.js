import {StyleSheet} from 'react-native';
import Scaling from '../../assets/device/normalize';
import colors from '../../assets/colors';

const {widthScale, heightScale, normalize, moderateScale} = Scaling;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: widthScale(12),
    paddingVertical: heightScale(16),
    borderBottomColor: colors.blueGray,
    borderBottomWidth: heightScale(0.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterText: {
    fontSize: normalize(12),
    color: colors.black,
    textTransform: 'uppercase',
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    height: heightScale(12),
  },
});
