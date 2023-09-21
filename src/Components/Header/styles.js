import {StyleSheet} from 'react-native';
import {COLORS} from '../../Assets/Theme/colors';

export const headerStyle = StyleSheet.create({
  headContainer: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    width: '96%',
    marginBottom: 20,
    marginTop: 20,
  },
  welcome: {
    color: COLORS.light,
    fontSize: 9,
  },
  comName: {
    color: COLORS.light,
    fontSize: 13,
  },
  textContent: {
    position: 'absolute',
    left: 50,
    width: '80%',
    top: 2,
  },
  priceContent: {
    position: 'absolute',
    right: 4,
    top: 8,
  },
  price: {
    color: COLORS.light,
  },
});
