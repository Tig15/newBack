import {StyleSheet} from 'react-native';
import {COLORS} from '../../Assets/Theme/colors';

export const bestStyle = StyleSheet.create({
  dealContainer: {
    marginRight: 5,
    marginLeft: 15,
    flexDirection: 'column',
    gap: 5,
  },
  flatContain: {
    marginTop: 15,
    marginBottom: 15,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 20,
    paddingHorizontal: 9,
    paddingVertical: 11,
  },

  icons: {
    width: 40,
    height: 40,
  },
  textContent: {
    width: 55,
    fontSize: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.dark,
  },
});
