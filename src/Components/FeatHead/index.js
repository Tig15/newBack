import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {headStyle} from './style';
import StyledText from '../Core/StyledText';

const FeatHead = ({data, title, onItemClick, selected}) => {
  const renderHeaders = ({item}) => {
    const handleItem = () => {
      onItemClick(item);
    };
    return (
      <TouchableOpacity style={{marginLeft: 8}} onPress={handleItem}>
        <Text style={selected ? headStyle.active : headStyle.inactive}>
          {item.name}
        </Text>
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
          keyExtractor={(item, index) => item.id}
          horizontal={true}
          style={{width: 140, marginLeft: 10}}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default FeatHead;
