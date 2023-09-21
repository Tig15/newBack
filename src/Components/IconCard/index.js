import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {bestStyle} from './style';

const IconCard = ({data, deal, stores}) => {
  const renderBestDeal = ({item}) => {
    return (
      <View style={bestStyle.dealContainer}>
        <TouchableOpacity
          style={
            deal
              ? bestStyle.iconContainer
              : stores
              ? bestStyle.iconsContainer
              : bestStyle.iconContainer
          }>
          <Image style={bestStyle.icons} source={{uri: item.icon}} />
        </TouchableOpacity>
        <Text style={bestStyle.textContent}>{item.title}</Text>
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
      />
    </View>
  );
};

export default IconCard;
