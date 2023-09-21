import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../Assets/Theme/colors';

const StyledText = ({children, small, big, kanit, merri}) => {
  return (
    <Text
      style={[
        {
          color: COLORS.dark,
          fontSize: small ? 9.5 : big ? 16 : 14,
          fontFamily:
            small || kanit
              ? 'Kanit-Regular'
              : big || merri
              ? 'Poppins-Regular'
              : 'Merriweather-Regular',
          paddingTop: 4,
        },
      ]}>
      {children}
    </Text>
  );
};

export default StyledText;

const styles = StyleSheet.create({});
