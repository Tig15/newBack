import {StyleSheet} from 'react-native';
import {COLORS} from '../../Assets/Theme/colors';

export const homeStyle = StyleSheet.create({
  firstContainer: {
    alignItems: 'center',
    width: '100%',
    height: 305,
    backgroundColor: COLORS.lightDark,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 15,
  },
  secondContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  thirdContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    marginTop: 15,
    paddingHorizontal: 15,
  },
  fourthContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    marginTop: 15,
    paddingHorizontal: 15,
  },
  fifthContainer: {
    marginTop: 20,
    marginLeft: 18,
    marginBottom: 10,
  },
});
