import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../Assets/Theme/colors';
import {favList} from './style';

const FavList = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={favList.goBack}>
        <MaterialIcons name="arrow-back" size={28} color={COLORS.lightDark} />
      </TouchableOpacity>
    </View>
  );
};

export default FavList;
