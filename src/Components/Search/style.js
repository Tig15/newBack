import {StyleSheet} from 'react-native';
import {COLORS} from '../../Assets/Theme/colors';

export const searchStyle = StyleSheet.create({
  searchContainer: {
    width: '100%',
  },
  inputContainer: {
    borderWidth: 1,
    backgroundColor: COLORS.light,
    width: '94%',
    height: 45,
    marginLeft: 15,
    paddingLeft: 20,
    borderRadius: 10,
    fontSize: 14,
    fontFamily: 'Merriweather-Regular',
  },
  iconContainer: {
    position: 'absolute',
    top: 13,
    right: 35,
  },
});
