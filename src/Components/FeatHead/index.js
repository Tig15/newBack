import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {headStyle} from '../HeadStyle/style';
import StyledText from '../Core/StyledText';

const FeatHead = ({data, title, onItemClick, selected, onCategoryClick}) => {
  const renderHeaders = ({item}) => {
    const handleItem = () => {
      onItemClick(item);
      // setSelected(item.id);
      onCategoryClick(item);
    };
    return (
      <TouchableOpacity style={{marginLeft: 8}} onPress={handleItem}>
        <Text
          style={item.id === selected ? headStyle.active : headStyle.inactive}>
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
