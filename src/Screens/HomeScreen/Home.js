import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Search from '../../Components/Search';
import Slider from '../../Components/Slider';
import Header from '../../Components/Header';
import {ScrollView} from 'react-native-virtualized-view';
import FeatHead from '../../Components/FeatHead';
import {
  dealHead,
  featuredHead,
  offerHead,
  popHead,
} from '../../Assets/Data/headData';
import {
  dealData,
  featuredData,
  offerData,
  popData,
} from '../../Assets/Data/cardData';
import StoreCard from '../../Components/StoreCard';
import OfferCard from '../../Components/OfferCard';
import DealCard from '../../Components/DealCard';
import {homeStyle} from './style';
import {COLORS} from '../../Assets/Theme/colors';
import Iconheader from '../../Components/IconCard/Iconheader';
import IconCard from '../../Components/IconCard';
import {bestDeal, popStores} from '../../Assets/Data/iconData';
import Footer from '../../Components/Footer';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import {requestCat} from '../../Redux/Actions/metaData';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const reqCat = useSelector(store => store.catReducer);

  useEffect(() => {
    dispatch(requestCat());
  }, [dispatch]);

  const {t} = useTranslation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={homeStyle.firstContainer}>
        <StatusBar backgroundColor={COLORS.lightDark} />
        <Header />
        <Search />
        <Slider />
      </View>
      <View style={homeStyle.secondContainer}>
        <FeatHead data={featuredHead} title={t('feat_stores')} />
        <StoreCard data={featuredData} />
        <FeatHead data={popHead} title={t('pop_stores')} />
        <StoreCard data={popData} />
      </View>
      <View style={homeStyle.thirdContainer}>
        <FeatHead data={offerHead} title={t('top_offers')} />
        <OfferCard data={offerData} />
      </View>
      <View style={homeStyle.fourthContainer}>
        <FeatHead data={dealHead} title={t('top_deals')} />
        <DealCard data={dealData} />
      </View>
      <View style={homeStyle.fifthContainer}>
        <Iconheader>{t('best_deal')}</Iconheader>
        <IconCard data={bestDeal} />
        <Iconheader>
          {t('pop_stores')} {t('cat')}
        </Iconheader>
        <IconCard data={popStores} stores />
      </View>
      <Footer />
    </ScrollView>
  );
};

export default Home;
