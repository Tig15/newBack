import {StyleSheet} from 'react-native';
import {COLORS} from '../../Assets/Theme/colors';

export const userStyle = StyleSheet.create({
  firstContainer: {
    alignItems: 'center',
    width: '100%',
    height: 150,
    backgroundColor: COLORS.lightDark,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 15,
    justifyContent: 'center',
  },
  secondContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 20,
    width: '90%',
    height: 200,
  },
  acc: {
    width: '100%',
    marginTop: 10,
    height: 35,
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius: 10,
  },
  dist: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 4,
  },
});
