import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {headerStyle} from './styles';
import {COLORS} from '../../Assets/Theme/colors';
import {useTranslation} from 'react-i18next';

const Header = () => {
  const {t} = useTranslation();

  return (
    <View style={headerStyle.headContainer}>
      <TouchableOpacity>
        <MaterialIcons name="view-headline" size={34} color={COLORS.light} />
      </TouchableOpacity>
      <View style={headerStyle.textContent}>
        <Text style={headerStyle.welcome}>{t('welcome_to')}</Text>
        <Text style={headerStyle.comName}>{t('app_name')}</Text>
      </View>
      <View style={headerStyle.priceContent}>
        <Text style={headerStyle.price}>00.00</Text>
      </View>
    </View>
  );
};

export default Header;
