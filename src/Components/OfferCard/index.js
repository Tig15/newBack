import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {offerStyle} from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../Assets/Theme/colors';

const OfferCard = ({data}) => {
  const renderTopItems = ({item}) => {
    return (
      <TouchableOpacity style={offerStyle.topContainer}>
        <View style={offerStyle.emptyContent}>
          <Text></Text>
        </View>
        <Text style={offerStyle.moveDesc}>{item.title}</Text>
        <View style={offerStyle.topContent}>
          <View style={offerStyle.safe} />
          <Text style={offerStyle.backText}>{item.store.cashback_string}</Text>
        </View>
        <TouchableOpacity style={offerStyle.toNext}>
          <MaterialIcons name="chevron-right" color={COLORS.light} size={20} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={offerStyle.mainContainer}>
      <FlatList
        data={data}
        renderItem={renderTopItems}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

export default OfferCard;
