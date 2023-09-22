import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {cardStyle} from './style';
import {COLORS} from '../../Assets/Theme/colors';
import Entypo from 'react-native-vector-icons/Entypo';

const StoreCard = ({data}) => {
  const [selectFave, setSelectFave] = useState(false);

  const handleFave = () => {
    setSelectFave(true);
  };

  const renderFeaturedData = item => {
    return (
      <View style={cardStyle.cardContainer}>
        <TouchableOpacity
          style={cardStyle.favContent}
          onPress={handleFave}
          onPr>
          {selectFave ? (
            <Entypo name="heart" size={22} />
          ) : (
            <Entypo name="heart-outlined" size={22} />
          )}
        </TouchableOpacity>
        <View style={cardStyle.innerContainer}>
          <Image source={{uri: item.item.logo}} style={cardStyle.coupIcon} />
        </View>
        <Text style={cardStyle.coupName}>{item.item.name}</Text>
        <View style={cardStyle.smallContainers}>
          <Image
            source={{uri: item.item.safeSign}}
            style={cardStyle.safeSign}
          />
          <Text style={cardStyle.cashBack}>{item.item.cashback_string}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={data[0]}
      renderItem={renderFeaturedData}
      keyExtractor={(item, index) => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default StoreCard;
