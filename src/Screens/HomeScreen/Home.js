import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Search from '../../Components/Search';
import Slider from '../../Components/Slider';
import Header from '../../Components/Header';
import {ScrollView} from 'react-native-virtualized-view';
import FeatHead from '../../Components/FeatHead';
import {dealHead, offerHead, featuredHead} from '../../Assets/Data/headData';
import {dealData, offerData, featuredData} from '../../Assets/Data/cardData';
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

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const reqCatData = useSelector(store => store.catReducer);

  useEffect(() => {
    dispatch(requestCat());
  }, [dispatch]);

  const processedData = {};
  useEffect(() => {
    console.log(reqCatData);
  }, [reqCatData]);

  // for (const key in reqCatData) {
  //   if (key !== 'content') {
  //     const data = reqCatData[key];
  //     const [procashName] = Object.keys(data);
  //     processedData[procashName] = data[procashName];
  //   }
  // }
  // console.log(processedData);

  // const sliderData = processedData['procash/slider'];
  // const slides = sliderData.slides;

  // const categoriesData = processedData['procash/categories'];
  // const categories = categoriesData.categories;
  // const title = categoriesData.title;

  // const storesData = processedData['procash/top-stores'];
  // const head = storesData.title.en;
  // const stores = storesData.categories;
  // const storeData = stores.map(storesDatas => storesDatas.stores);

  const {t} = useTranslation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* <View style={homeStyle.firstContainer}>
        <StatusBar backgroundColor={COLORS.lightDark} />
        <Header />
        <Search />
        <Slider data={slides} />
      </View>
       <View style={homeStyle.secondContainer}>
        <FeatHead data={stores} title={head} />
        <StoreCard data={storeData} />
      </View>  */}
      {/* <View style={homeStyle.thirdContainer}>
        <FeatHead data={offerHead} title={t('top_offers')} />
        <OfferCard data={offerData} />
      </View>
      <View style={homeStyle.fourthContainer}>
        <FeatHead data={dealHead} title={t('top_deals')} />
        <DealCard data={dealData} />
      </View> */}
      {/* <View style={homeStyle.fifthContainer}>
        <Iconheader>{title.en}</Iconheader>
        <IconCard data={categories} /> */}
      {/* <Iconheader>
          {t('pop_stores')} {t('cat')}
        </Iconheader>
        <IconCard data={popStores} stores /> */}
      {/* </View> */}
      <Footer />
    </ScrollView>
  );
};

export default Home;
