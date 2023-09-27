import {Dimensions, FlatList, Image, Text, View} from 'react-native';
import React, {useState} from 'react';
import {sliderStyles} from './style';

const screenWidth = Dimensions.get('screen').width - 19;

const Slider = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideData = data ? Object.values(data) : [];

  const renderDotIndicators = () => {
    return slideData.map((dot, index) => (
      <View
        key={index}
        style={
          index === activeIndex
            ? sliderStyles.activeDot
            : sliderStyles.inactiveDot
        }></View>
    ));
  };

  const renderImage = ({item}) => {
    const url = item.image_url.en;
    return (
      <View style={sliderStyles.swiper}>
        <Image
          style={sliderStyles.imageSwipe}
          source={{uri: url}}
          onError={() => {
            // Handle image load errors here
          }}
        />
      </View>
    );
  };

  const handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.floor(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  return (
    <View style={{width: '95%'}}>
      <FlatList
        data={slideData}
        renderItem={renderImage}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      />

      <View style={sliderStyles.dotContainer}>{renderDotIndicators()}</View>
    </View>
  );
};

export default Slider;
