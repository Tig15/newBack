import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {dealStyle} from './style';

const DealCard = ({data}) => {
  const renderDealData = ({item}) => {
    return (
      <TouchableOpacity style={dealStyle.dealContainer}>
        <View style={dealStyle.backImage}>
          <Image style={dealStyle.productImage} source={{uri: item.image}} />
        </View>
        <View style={dealStyle.details}>
          <Text style={dealStyle.title}>{item.title}</Text>
          <Text style={dealStyle.desc}>{item.desc}</Text>
          <View style={dealStyle.rate}>
            <Text style={dealStyle.oldRate}>{item.retail_price}</Text>
            <Text style={dealStyle.newRate}>{item.offer_price}</Text>
          </View>
        </View>
        <View style={dealStyle.toTheTop}>
          <Text style={dealStyle.cashie}>{item.cashback_string}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderDealData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item.visits}
      />
    </View>
  );
};

export default DealCard;
