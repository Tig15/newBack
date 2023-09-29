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
  // const [processedData, setProcessedData] = useState([]);

  const dispatch = useDispatch();
  const {data, loading, errors} = useSelector(store => store.catReducer);

  useEffect(() => {
    dispatch(requestCat());
  }, []);

  useEffect(() => {
    if (!loading && data) {
      console.log('lodaded data', data);
      // setProcessedData(processedData);
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

  const sectionData = {};

  processedData.forEach(section => {
    const blockName = section.blockName;
    const type = section.category_type;
    const limit = section.limit;

    // Use the blockName to determine how to handle the section
    if (blockName === 'procash/slider') {
      sectionData.sliderData = section;
    } else if (blockName === 'procash/featured-stores') {
      sectionData.featuredStoresData = section;
    } else if (blockName === 'procash/top-stores' && limit == 10) {
      sectionData.popularStoresData = section;
    } else if (blockName === 'procash/top-offers') {
      sectionData.topOffersData = section;
    } else if (blockName === 'procash/top-deals') {
      sectionData.topDealsData = section;
    } else if (blockName === 'procash/categories' && type == 'DealCategory') {
      sectionData.bestDealData = section;
    } else if (blockName === 'procash/categories' && type == 'StoreCategory') {
      sectionData.popDealData = section;
    } else if (blockName === 'procash/categories' && type == 'CouponCategory') {
      sectionData.coupDealData = section;
    }
  });
  console.log('Your Data', sectionData);

  const sliderData = sectionData.sliderData || {};
  const featuredStoresData = sectionData.featuredStoresData || {};
  const popularStoresData = sectionData.popularStoresData || {};
  const topOffersData = sectionData.topOffersData || {};
  const topDealsData = sectionData.topDealsData || {};
  const bestDealData = sectionData.bestDealData || {};
  const popDealData = sectionData.popDealData || {};
  const coupDealData = sectionData.coupDealData || {};

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

  // const {t} = useTranslation();
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={homeStyle.firstContainer}>
        <StatusBar backgroundColor={COLORS.lightDark} />
        <Header />
        <Search />
        <Slider data={sliderData ? sliderData.slides : []} />
      </View>
      <View style={homeStyle.secondContainer}>
        <FeatHead
          data={featuredStoresData ? featuredStoresData.categories : []}
          title={
            featuredStoresData && featuredStoresData.title
              ? featuredStoresData.title['en']
              : []
          }
          onItemClick={handleStoreClick}
          selected={selectedId}
          setSelected={setSelectedId}
          onCategoryClick={handleCategoryClick}
        />
        <StoreCard data={selectedCategory ? selectedCategory.stores : []} />
        <PopHead
          data={popularStoresData ? popularStoresData.categories : []}
          title={
            popularStoresData && popularStoresData.title
              ? popularStoresData.title['en']
              : []
          }
          onItemClick={handlePopStoreClick}
          selected={selectedTopId}
          setSelected={setSelectedTopId}
          onCategoryClick={handlePopCatClick}
        />
        <StoreCard data={selectedTopCat ? selectedTopCat.stores : []} />
      </View>
      <View style={homeStyle.thirdContainer}>
        <OffHead
          data={topOffersData ? topOffersData.categories : []}
          title={
            topOffersData && topOffersData.title
              ? topOffersData.title['en']
              : []
          }
          onItemClick={handleOfferClick}
          selected={selectedOffId}
          setSelected={setSelectedOffId}
          onOfferCatClick={handleOfferCatClick}
        />
        <OfferCard data={selectedOffers ? selectedOffers.coupons : []} />
      </View>
      <View style={homeStyle.fourthContainer}>
        <DealHead
          data={topDealsData ? topDealsData.categories : []}
          title={
            topDealsData && topDealsData.title ? topDealsData.title['en'] : []
          }
          onItemClick={handleDealClick}
          selected={selectedDealId}
          setSelected={setSelectedDealId}
          onDealCatClick={handleDealCatClick}
        />
        <DealCard data={selectedDeal ? selectedDeal.deals : []} />
      </View>
      <View style={homeStyle.fifthContainer}>
        <Iconheader>
          {bestDealData && bestDealData.title ? bestDealData.title['en'] : []}
        </Iconheader>
        <IconCard data={bestDealData ? bestDealData.categories : []} />
        <Iconheader>
          {popDealData && popDealData.title ? popDealData.title['en'] : []}
        </Iconheader>
        <IconCard data={popDealData ? popDealData.categories : []} />
        <Iconheader>
          {coupDealData && coupDealData.title ? coupDealData.title['en'] : []}
        </Iconheader>
        <IconCard data={coupDealData ? coupDealData.categories : []} />
      </View>
      <Footer />
    </ScrollView>
  );
};

export default Home;
