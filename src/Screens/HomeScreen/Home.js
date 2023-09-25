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
import LoadingSpinner from '../../Components/Spinner';

const Home = ({navigation}) => {
  // const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();
  const reqCatData = useSelector(store => store.catReducer);

  useEffect(() => {
    dispatch(requestCat());
  }, [dispatch]);

  useEffect(() => {
    console.log(reqCatData);
  }, [reqCatData]);

  const processedData = [];

  for (const key in reqCatData) {
    if (key !== 'content') {
      const data = reqCatData[key];
      for (const procashKey in data) {
        const procashData = data[procashKey];
        processedData.push(procashData);
      }
    }
  }

  function extractData(data, key) {
    for (const categoryKey in data) {
      if (categoryKey === key) {
        const categoryData = data[categoryKey];
        return {
          title: categoryData.title.en,
          categories: categoryData.categories,
        };
      }
    }
    return null; // Return null if the key is not found
  }

  // const featuredStores = processedData[2]['procash/featured-stores'];
  // const featTitle = featuredStores.title.en;
  // const featCat = featuredStores.categories;
  // const featStores = featCat.map(storeData => storeData.stores);

  // const popularStores = processedData[3]['procash/top-stores'];
  // const popTitle = popularStores.title.en;
  // const popCat = popularStores.categories;
  // const popStores = popCat.map(storeData => storeData.stores);

  // const topOffers = processedData[5]['procash/top-offers'];
  // const offerTitle = topOffers.title.en;
  // const offerCat = topOffers.categories;
  // const offerCoup = offerCat.map(couponData => couponData.coupons);

  // const topDeals = processedData[6]['procash/top-deals'];
  // const topTitle = topDeals.title.en;
  // const topCat = topDeals.categories;
  // const topDeal = topCat.map(dealData => dealData.deals);

  // const bestDeal = processedData[11]['procash/categories'];
  // const bestCat = bestDeal.categories;
  // const bestHead = bestDeal.title.en;

  // const popDeal = processedData[12]['procash/categories'];
  // const popDealCat = popDeal.categories;
  // const popHead = popDeal.title.en;

  const sliderData = processedData[1]['procash/slider'];
  const slides = sliderData.slides;

  const featuredStoresData = extractData(
    processedData[2],
    'procash/featured-stores',
  );

  const handleStoreClick = store => {
    if (
      store.name === 'Handpicked' ||
      store.name === "Women's" ||
      store.name === 'Online Games'
    ) {
      setSelected(true); // Update selectedId based on the clicked store's ID
    } else {
      setSelected(false); // Clear selectedId if none of the specified conditions match
    }
  };

  const popularStoresData = extractData(processedData[3], 'procash/top-stores');

  const topOffersData = extractData(processedData[5], 'procash/top-offers');

  const topDealsData = extractData(processedData[6], 'procash/top-deals');

  const bestDealData = extractData(processedData[11], 'procash/categories');

  const popDealData = extractData(processedData[12], 'procash/categories');

  const {t} = useTranslation();
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
          title={featuredStoresData.title}
          onItemClick={handleStoreClick}
          selected={selected}
          setSelected={setSelected}
        />
        <StoreCard
          data={featuredStoresData.categories.map(
            storeData => storeData.stores,
          )}
        />
        <FeatHead
          data={popularStoresData.categories}
          title={popularStoresData.title}
        />
        <StoreCard
          data={popularStoresData.categories.map(storeData => storeData.stores)}
        />
      </View>
      <View style={homeStyle.thirdContainer}>
        <FeatHead data={topOffersData.categories} title={topOffersData.title} />
        <OfferCard
          data={topOffersData.categories.map(couponData => couponData.coupons)}
        />
      </View>
      <View style={homeStyle.fourthContainer}>
        <FeatHead data={topDealsData.categories} title={topDealsData.title} />
        <DealCard
          data={topDealsData.categories.map(dealData => dealData.deals)}
        />
      </View>
      <View style={homeStyle.fifthContainer}>
        <Iconheader>{bestDealData.title}</Iconheader>
        <IconCard data={bestDealData.categories} />
        <Iconheader>{popDealData.title}</Iconheader>
        <IconCard data={popDealData.categories} />
      </View>
      <Footer />
    </ScrollView>
  );
};

export default Home;
