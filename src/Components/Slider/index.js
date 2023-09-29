import {Dimensions, FlatList, Image, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {sliderStyles} from './style';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {COLORS} from '../../Assets/Theme/colors';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.95);

const Slider = ({data}) => {
  const [index, setIndex] = useState(0);

  const isCarousel = useRef(null);

  const slideData = data ? Object.values(data) : [];

  const renderImage = ({item}) => {
    const url = item.image_url['en'];

    return (
      <View style={sliderStyles.swiper}>
        <Image style={sliderStyles.imageSwipe} source={{uri: url}} />
      </View>
    );
  };

  return (
    <View style={{width: SLIDER_WIDTH}}>
      <Carousel
        layout="default"
        layoutCardOffset={4}
        ref={isCarousel}
        data={slideData}
        renderItem={renderImage}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
      />
      <View style={{marginTop: -20}}>
        <Pagination
          dotsLength={slideData.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: COLORS.deal,
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </View>
  );
};

export default Slider;
