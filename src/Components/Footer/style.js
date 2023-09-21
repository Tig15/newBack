import {StyleSheet} from 'react-native';
import {COLORS} from '../../Assets/Theme/colors';

export const footStyle = StyleSheet.create({
  mainFoot: {
    width: '100%',
    height: 150,
  },
  textContents: {
    width: '90%',
    marginLeft: 10,
    marginTop: 10,
  },
  invite: {
    fontSize: 12,
    color: COLORS.light,
    fontWeight: 'bold',
  },
  multText: {
    fontSize: 16,
    color: COLORS.light,
    fontWeight: 'bold',
  },
  refContent: {
    position: 'absolute',
    right: 2,
    top: 6,
  },
  refImage: {
    width: 90,
    height: 90,
  },
  refers: {
    backgroundColor: COLORS.dark,
    height: 35,
    width: 130,
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 9,
    top: 10,
    left: 8,
  },
  refText: {
    color: COLORS.light,
    fontSize: 12,
    fontFamily: 'Merriweather-Regular',
  },
});
