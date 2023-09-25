import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {bestStyle} from './style';

const IconCard = ({data}) => {
  const renderBestDeal = ({item}) => {
    return (
      <View style={bestStyle.dealContainer}>
        <TouchableOpacity style={bestStyle.iconContainer}>
          <Image style={bestStyle.icons} source={{uri: item.icon}} />
        </TouchableOpacity>
        <Text style={bestStyle.textContent}>{item.name}</Text>
      </View>
    );
  };
  return (
    <View style={bestStyle.flatContain}>
      <FlatList
        data={data}
        renderItem={renderBestDeal}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

export default IconCard;
