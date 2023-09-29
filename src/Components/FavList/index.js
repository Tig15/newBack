import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS} from '../../Assets/Theme/colors';
import {favList} from './style';

const FavList = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={favList.goBack}>
        <Entypo name="arrow-long-left" size={24} color={COLORS.lightDark} />
      </TouchableOpacity>
    </View>
  );
};

export default FavList;
