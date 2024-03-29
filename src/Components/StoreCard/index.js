import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {cardStyle} from './style';
import {COLORS} from '../../Assets/Theme/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const StoreCard = ({data}) => {
  const [selectFave, setSelectFave] = useState(false);

  const handleFave = () => {
    setSelectFave(true);
  };

  const renderFeaturedData = item => {
    return (
      <TouchableOpacity style={cardStyle.cardContainer}>
        <TouchableOpacity style={cardStyle.favContent} onPress={handleFave}>
          {selectFave ? (
            <MaterialIcons name="favorite" size={22} />
          ) : (
            <MaterialIcons name="favorite-outline" size={22} />
          )}
        </TouchableOpacity>
        <View style={cardStyle.innerContainer}>
          <Image source={{uri: item.item.logo}} style={cardStyle.coupIcon} />
        </View>
        <Text style={cardStyle.coupName}>{item.item.name}</Text>
        <View style={cardStyle.smallContainers}>
          <View style={cardStyle.safeSign} />
          <Text style={cardStyle.cashBack}>{item.item.cashback_string}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data} // {data[0]} is made for bionapp API, for Laraback it has to be {data}
      renderItem={renderFeaturedData}
      keyExtractor={(item, index) => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default StoreCard;
