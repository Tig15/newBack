import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../Assets/Theme/colors';

const Iconheader = ({children}) => {
  return (
    <Text
      style={{fontSize: 13, fontFamily: 'Poppins-Regular', color: COLORS.dark}}>
      {children}
    </Text>
  );
};

export default Iconheader;
