import {Dimensions, FlatList, Image, Text, View} from 'react-native';
import React, {useState} from 'react';
import {sliderStyles} from './style';

const screenWidth = Dimensions.get('screen').width;

const Slider = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideData = [];

  for (key in data) {
    const sliderData = data[key];
    slideData.push(sliderData);
  }

  const renderDotIndicators = () => {
    return slideData.map((dot, index) => {
      if (activeIndex === index) {
        return <View key={index} style={sliderStyles.activeDot}></View>;
      } else {
        return <View key={index} style={sliderStyles.inactiveDot}></View>;
      }
    });
  };

  const renderImage = ({item}) => {
    const url = item.image_url.en;
    return (
      <View style={sliderStyles.swiper}>
        <Image style={sliderStyles.imageSwipe} source={{uri: url}} />
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
        data={slideData}
        renderItem={renderImage}
        keyExtractor={(item, index) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      />

      <View style={sliderStyles.dotContainer}>{renderDotIndicators()}</View>
    </View>
  );
};

export default Slider;
