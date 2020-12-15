import {Dimensions, StyleSheet} from 'react-native';
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
  },
  headerText: {
    fontSize: normalize(16),
    color: colors.black,
  },
  checkMark: {
    height: heightScale(12),
    tintColor: colors.veryLightBlue,
    marginRight: widthScale(12),
  },
  filterItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: widthScale(16),
    paddingVertical: heightScale(8),
  },
  itemSeparator: {
    height: heightScale(1),
    backgroundColor: colors.veryLightBlue,
  },
  selectedCheckMark: {
    tintColor: colors.pinkishTan,
  },
});
