import {StyleSheet} from 'react-native';
import {COLORS} from '../../Assets/Theme/colors';

export const offerStyle = StyleSheet.create({
  topContainer: {
    width: 270,
    height: 130,
    backgroundColor: COLORS.mono,
    marginLeft: 10,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  safe: {
    height: 20,
    width: 20,
    backgroundColor: COLORS.tertiary,
    borderRadius: 8,
    marginTop: 4,
  },
  emptyContent: {
    backgroundColor: COLORS.primary,
    width: 120,
    height: 45,
    borderRadius: 10,
    top: 7,
    left: 8,
  },
  topContent: {
    position: 'absolute',
    top: 16,
    right: 28,
    flexDirection: 'row',
    gap: 8,
    width: 80,
  },
  moveDesc: {
    top: 17,
    left: 7,
    fontSize: 11.5,
    width: '95%',
    color: COLORS.dark,
    fontFamily: 'Merriweather-Regular',
  },
  backText: {
    fontSize: 9.5,
    fontFamily: 'BricolageGrotesque-Regular',
    color: COLORS.tint,
  },
  toNext: {
    backgroundColor: COLORS.dark,
    width: 20,
    height: 20,
    borderRadius: 40,
    paddingHorizontal: 4.5,
    paddingVertical: 3.2,
    position: 'absolute',
    bottom: 8,
    right: 14,
  },
});
