import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import StyledText from '../Core/StyledText';
import {featuredHead, offerHead} from '../../Assets/Data/headData';
import {headStyle} from './style';

const FeatHead = ({data, title}) => {
  const renderHeaders = ({item}) => {
    return (
      <TouchableOpacity>
        <StyledText small> {item.title} </StyledText>
      </TouchableOpacity>
    );
  };

  return (
    <View style={headStyle.firstContainer}>
      <StyledText big>{title}</StyledText>
      <View style={headStyle.flatContent}>
        <FlatList
          data={data}
          renderItem={renderHeaders}
          numColumns={3}
          columnWrapperStyle={{gap: 5}}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
};

export default FeatHead;
