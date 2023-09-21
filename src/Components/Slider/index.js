import {Dimensions, FlatList, Image, Text, View} from 'react-native';
import React, {useState} from 'react';
import {image} from '../../Assets/Image/data';
import {sliderStyles} from './style';

const screenWidth = Dimensions.get('screen').width;

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageData = image;

  const renderDotIndicators = () => {
    return imageData.map((dot, index) => {
      if (activeIndex === index) {
        return <View key={index} style={sliderStyles.activeDot}></View>;
      } else {
        return <View key={index} style={sliderStyles.inactiveDot}></View>;
      }
    });
  };

  const renderImage = ({item}) => {
    return (
      <View style={sliderStyles.swiper}>
        <Image style={sliderStyles.imageSwipe} source={{uri: item.url}} />
      </View>
    );
  };

  const handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.x;

    const index = scrollPosition / screenWidth;
    setActiveIndex(index);
  };

  return (
    <View style={sliderStyles.mainContainer}>
      <FlatList
        data={imageData}
        renderItem={renderImage}
        keyExtractor={(item, index) => item.id}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
      />

      <View style={sliderStyles.dotContainer}>{renderDotIndicators()}</View>
    </View>
  );
};

export default Slider;
