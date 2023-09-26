import {StyleSheet} from 'react-native';
import {COLORS} from '../../Assets/Theme/colors';

export const headStyle = StyleSheet.create({
  firstContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  flatContent: {
    marginTop: 3,
    marginLeft: 4,
  },
  active: {
    fontSize: 10,
    marginTop: 5,
    color: COLORS.secondary,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: COLORS.secondary,
  },
  inactive: {
    fontSize: 10,
    marginTop: 5,
    color: COLORS.uno,
    fontWeight: 'bold',
  },
});
