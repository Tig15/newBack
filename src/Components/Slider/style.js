import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../Assets/Theme/colors';

const screenWidth = Dimensions.get('screen').width - 23;

export const sliderStyles = StyleSheet.create({
  mainContainer: {
    width: '94%',
  },
  swiper: {
    marginTop: 10,
  },
  imageSwipe: {
    width: screenWidth,
    height: 140,
    objectFit: 'fill',
    borderRadius: 10,
  },
  activeDot: {
    width: 25,
    height: 10,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
  },
  inactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: COLORS.tint,
  },
  dotContainer: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'center',
    gap: 10,
  },
});
