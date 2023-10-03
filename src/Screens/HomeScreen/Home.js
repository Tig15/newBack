import {FlatList, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Search from '../../Components/Search';
import Slider from '../../Components/Slider';
import Header from '../../Components/Header';
import {ScrollView} from 'react-native-virtualized-view';
import FeatHead from '../../Components/FeatHead';
import StoreCard from '../../Components/StoreCard';
import OfferCard from '../../Components/OfferCard';
import DealCard from '../../Components/DealCard';
import {homeStyle} from './style';
import {COLORS} from '../../Assets/Theme/colors';
import Iconheader from '../../Components/IconCard/Iconheader';
import IconCard from '../../Components/IconCard';
import Footer from '../../Components/Footer';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {requestCat} from '../../Redux/Actions/metaData';
import OffHead from '../../Components/OffHead';
import DealHead from '../../Components/DealHead';
import LoadingSpinner from '../../Components/Spinner';
import PopHead from '../../Components/PopHead';

const Home = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedTopId, setSelectedTopId] = useState(null);
  const [selectedOffId, setSelectedOffId] = useState(null);
  const [selectedDealId, setSelectedDealId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTopCat, setSelectedTopCat] = useState(null);
  const [selectedOffers, setSelectedOffers] = useState(null);
  const [selectedDeal, setSelectedDeal] = useState(null);

  const dispatch = useDispatch();
  const {data, loading, errors} = useSelector(store => store.catReducer);

  useEffect(() => {
    dispatch(requestCat());
  }, []);

  useEffect(() => {
    if (!loading && data) {
      console.log('Loaded data', data);
    }
  }, [loading, data]);

  const processedData = [];

  for (const key in data) {
    if (key !== 'content') {
      const loadedData = data[key];
      for (const procashKey in loadedData) {
        const procashData = loadedData[procashKey];
        processedData.push(procashData);
      }
    }
  }

  console.log('Processed Data', processedData);

  // Featured Stores
  const handleStoreClick = store => {
    if (
      store.name === 'Handpicked' ||
      store.name === "Women's" ||
      store.name === 'Online Games'
    ) {
      setSelectedId(store.id);
    } else {
      setSelectedId(null);
    }
  };

  const handleCategoryClick = category => {
    setSelectedCategory(category);
  };

  // Popular Stores
  const handlePopStoreClick = store => {
    if (
      store.name === 'Handpicked' ||
      store.name === 'Online Games' ||
      store.name === 'Credit Card'
    ) {
      setSelectedTopId(store.id);
    } else {
      setSelectedTopId(null);
    }
  };

  const handlePopCatClick = topCat => {
    setSelectedTopCat(topCat);
  };

  // Top Offers
  const handleOfferClick = offer => {
    if (
      offer.name === 'Latest' ||
      offer.name === 'Health & Beauty' ||
      offer.name === 'Fashion' ||
      offer.name === 'Laptops'
    ) {
      setSelectedOffId(offer.id);
    } else {
      setSelectedOffId(null);
    }
  };

  const handleOfferCatClick = offer => {
    setSelectedOffers(offer);
  };

  // Top Deals
  const handleDealClick = deal => {
    if (
      deal.name === 'Featured' ||
      deal.name === 'Electornics' ||
      deal.name === 'Fashion' ||
      deal.name === 'Others'
    ) {
      setSelectedDealId(deal.id);
    } else {
      setSelectedDealId(null);
    }
  };

  const handleDealCatClick = deal => {
    setSelectedDeal(deal);
  };

  const renderComponents = section => {
    const blockName = section.item.blockName;
    const block = section.item.blockId;
    switch (blockName) {
      case 'procash/slider':
        return (
          <View style={homeStyle.firContainer}>
            <Slider data={section.item.slides ? section.item.slides : []} />
          </View>
        );

      case 'procash/featured-stores':
        return (
          <View style={homeStyle.secondContainer}>
            <FeatHead
              data={section ? section.item.categories : []}
              title={
                section && section.item.title ? section.item.title['en'] : []
              }
              onItemClick={handleStoreClick}
              selected={selectedId}
              setSelected={setSelectedId}
              onCategoryClick={handleCategoryClick}
            />
            <StoreCard data={selectedCategory ? selectedCategory.stores : []} />
          </View>
        );

      case 'procash/top-stores':
        return (
          <View style={homeStyle.secondContainer}>
            <PopHead
              data={section ? section.item.categories : []}
              title={
                section && section.item.title ? section.item.title['en'] : []
              }
              onItemClick={handlePopStoreClick}
              selected={selectedTopId}
              setSelected={setSelectedTopId}
              onCategoryClick={handlePopCatClick}
            />
            <StoreCard data={selectedTopCat ? selectedTopCat.stores : []} />
          </View>
        );

      case 'procash/top-offers':
        return (
          <View style={homeStyle.thirdContainer}>
            <OffHead
              data={section ? section.item.categories : []}
              title={
                section && section.item.title ? section.item.title['en'] : []
              }
              onItemClick={handleOfferClick}
              selected={selectedOffId}
              setSelected={setSelectedOffId}
              onOfferCatClick={handleOfferCatClick}
            />
            <OfferCard data={selectedOffers ? selectedOffers.coupons : []} />
          </View>
        );

      case 'procash/top-deals':
        return (
          <View style={homeStyle.fourthContainer}>
            <DealHead
              data={section ? section.item.categories : []}
              title={
                section && section.item.title ? section.item.title['en'] : []
              }
              onItemClick={handleDealClick}
              selected={selectedDealId}
              setSelected={setSelectedDealId}
              onDealCatClick={handleDealCatClick}
            />
            <DealCard data={selectedDeal ? selectedDeal.deals : []} />
          </View>
        );

      case 'procash/categories':
        return (
          <View style={homeStyle.fifthContainer}>
            <Iconheader>
              {section && section.item.title ? section.item.title['en'] : []}
            </Iconheader>
            <IconCard data={section ? section.item.categories : []} />
          </View>
        );

      default:
        null;
    }
  };

  // const {t} = useTranslation();
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <FlatList
        data={processedData}
        renderItem={renderComponents}
        ListHeaderComponent={() => (
          <View style={homeStyle.firstContainer}>
            <StatusBar backgroundColor={COLORS.lightDark} />
            <Header />
            <Search />
          </View>
        )}
        ListFooterComponent={() => <Footer />}
      />
    </ScrollView>
  );
};

export default Home;
