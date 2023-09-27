import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../Assets/Theme/colors';

const LoadingSpinner = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color={COLORS.deus} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default LoadingSpinner;
