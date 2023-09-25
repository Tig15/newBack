import {StyleSheet} from 'react-native';
import {COLORS} from '../../Assets/Theme/colors';

export const dealStyle = StyleSheet.create({
  dealContainer: {
    width: 168,
    height: 302,
    backgroundColor: COLORS.deal,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
  },
  productImage: {
    width: 120,
    height: 160,
    objectFit: 'contain',
  },
  backImage: {
    width: 140,
    height: 180,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    top: 15,
    left: 15,
  },
  details: {
    top: 30,
    alignItems: 'center',
    gap: 4,
  },
  title: {
    color: COLORS.dark,
    fontFamily: 'CrimsonText-SemiBold',
    fontSize: 10,
    textAlign: 'center',
  },
  desc: {
    fontSize: 10,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
  },
  rate: {
    flexDirection: 'row',
    gap: 5,
    position: 'absolute',
    top: 70,
  },
  oldRate: {
    fontSize: 9,
    textDecorationLine: 'line-through',
  },
  newRate: {
    fontSize: 10,
    color: COLORS.tertiary,
    fontWeight: 'bold',
  },
  toTheTop: {
    position: 'absolute',
    right: 0,
    top: 22,
    backgroundColor: COLORS.fave,
    paddingHorizontal: 7,
    paddingVertical: 2.5,
    height: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cashie: {
    fontSize: 10,
    paddingLeft: 5,
    color: COLORS.light,
    fontWeight: 'bold',
  },
});
