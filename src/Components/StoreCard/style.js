import {StyleSheet} from 'react-native';
import {COLORS} from '../../Assets/Theme/colors';

export const cardStyle = StyleSheet.create({
  cardContainer: {
    width: 210,
    borderRadius: 20,
    height: 150,
    backgroundColor: COLORS.tint,
    margin: 10,
  },
  coupIcon: {
    width: 130,
    height: 45,
    borderRadius: 10,
    objectFit: 'cover',
  },
  innerContainer: {
    backgroundColor: 'white',
    width: 150,
    height: 50,
    position: 'absolute',
    top: 25,
    left: 15,
    padding: 3,
    borderRadius: 10,
  },
  coupName: {
    color: COLORS.dark,
    fontFamily: 'Merriweather-Regular',
    position: 'absolute',
    bottom: 40,
    left: 20,
    fontSize: 12,
    width: '60%',
  },
  smallContainers: {
    position: 'absolute',
    bottom: 10,
    left: 15,
    flexDirection: 'row',
    gap: 5,
  },
  safeSign: {
    width: 15,
    height: 15,
    borderRadius: 30,
    backgroundColor: COLORS.tertiary,
  },
  cashBack: {
    fontSize: 10,
  },
  favContent: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: COLORS.fave,
    width: 34,
    height: 32,
    borderTopRightRadius: 15,
    // borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 5,
  },
});
