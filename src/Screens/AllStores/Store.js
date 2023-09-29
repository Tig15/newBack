import {View, Text} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-virtualized-view';
import {allStore} from './style';
import {COLORS} from '../../Assets/Theme/colors';

const Store = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={allStore.firstContainer}>
        <Text style={{color: COLORS.lightDark}}> All Stores </Text>
      </View>
    </ScrollView>
  );
};

export default Store;
