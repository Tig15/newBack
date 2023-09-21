import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {dealStyle} from './style';

const DealCard = ({data}) => {
  const renderDealData = ({item}) => {
    return (
      <View style={dealStyle.dealContainer}>
        <View style={dealStyle.backImage}>
          <Image style={dealStyle.productImage} source={{uri: item.image}} />
        </View>
        <View style={dealStyle.details}>
          <Text style={dealStyle.title}>{item.title}</Text>
          <Text style={dealStyle.desc}>{item.desc}</Text>
          <View style={dealStyle.rate}>
            <Text style={dealStyle.oldRate}>{item.oldRate}</Text>
            <Text style={dealStyle.newRate}>{item.newRate}</Text>
          </View>
        </View>
        <View style={dealStyle.toTheTop}>
          <Text style={dealStyle.cashie}>{item.cashback}</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderDealData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default DealCard;
