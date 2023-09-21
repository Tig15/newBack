import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {offerStyle} from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS} from '../../Assets/Theme/colors';

const OfferCard = ({data}) => {
  const renderTopItems = ({item}) => {
    return (
      <View style={offerStyle.topContainer}>
        <View style={offerStyle.emptyContent}>
          <Text></Text>
        </View>
        <Text style={offerStyle.moveDesc}>{item.desc}</Text>
        <View style={offerStyle.topContent}>
          <Image style={offerStyle.safe} source={{uri: item.safeSign}} />
          <Text style={offerStyle.backText}>{item.cashback}</Text>
        </View>
        <TouchableOpacity style={offerStyle.toNext}>
          <Entypo name="chevron-thin-right" color={COLORS.light} size={12.5} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View styl={offerStyle.mainContainer}>
      <FlatList
        data={data}
        renderItem={renderTopItems}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default OfferCard;
