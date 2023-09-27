import {StatusBar, StyleSheet, Text, View} from 'react-native';
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

const Home = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedOffId, setSelectedOffId] = useState(null);
  const [selectedDealId, setSelectedDealId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedOffers, setSelectedOffers] = useState(null);
  const [selectedDeal, setSelectedDeal] = useState(null);

  const dispatch = useDispatch();
  const reqCatData = useSelector(store => store.catReducer);

  const {data, loading, errors} = reqCatData;

  useEffect(() => {
    dispatch(requestCat());
  }, [dispatch]);

  useEffect(() => {
    if (!loading && data) {
      console.log('Loaded Data', data);
    }
  }, [loading, data]);

  const loadedData = data;

  const processedData = [];

  for (const key in loadedData) {
    if (key !== 'content') {
      const data = loadedData[key];
      for (const procashKey in data) {
        const procashData = data[procashKey];
        processedData.push(procashData);
      }
    }
  }

  console.log('Processed Data', processedData);

  const sliderData = processedData[1];
  const slides = sliderData.slides;

  const featuredStoresData = processedData[2];

  // const popularStoresData = processedData[3];

  const topOffersData = processedData[5];

  const topDealsData = processedData[6];

  const bestDealData = processedData[11];

  const popDealData = processedData[12];

  const coupDealData = processedData[13];

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

  const {t} = useTranslation();
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={homeStyle.firstContainer}>
        <StatusBar backgroundColor={COLORS.lightDark} />
        <Header />
        <Search />
        <Slider data={slides} />
      </View>
      <View style={homeStyle.secondContainer}>
        <FeatHead
          data={featuredStoresData.categories}
          title={featuredStoresData.title.en}
          onItemClick={handleStoreClick}
          selected={selectedId}
          setSelected={setSelectedId}
          onCategoryClick={handleCategoryClick}
        />
        <StoreCard data={selectedCategory ? selectedCategory.stores : []} />
        {/* <FeatHead
          data={popularStoresData.categories}
          title={popularStoresData.title.en}
        />
        <StoreCard
          data={popularStoresData.categories.map(storeData => storeData.stores)}
        /> */}
      </View>
      <View style={homeStyle.thirdContainer}>
        <OffHead
          data={topOffersData.categories}
          title={topOffersData.title.en}
          onItemClick={handleOfferClick}
          selected={selectedOffId}
          setSelected={setSelectedOffId}
          onOfferCatClick={handleOfferCatClick}
        />
        <OfferCard data={selectedOffers ? selectedOffers.coupons : []} />
      </View>
      <View style={homeStyle.fourthContainer}>
        <DealHead
          data={topDealsData.categories}
          title={topDealsData.title.en}
          onItemClick={handleDealClick}
          selected={selectedDealId}
          setSelected={setSelectedDealId}
          onDealCatClick={handleDealCatClick}
        />
        <DealCard data={selectedDeal ? selectedDeal.deals : []} />
      </View>
      <View style={homeStyle.fifthContainer}>
        <Iconheader>{bestDealData.title.en}</Iconheader>
        <IconCard data={bestDealData.categories} />
        <Iconheader>{popDealData.title.en}</Iconheader>
        <IconCard data={popDealData.categories} />
        <Iconheader>{coupDealData.title.en}</Iconheader>
        <IconCard data={coupDealData.categories} />
      </View>
      <Footer />
    </ScrollView>
  );
};

export default Home;
