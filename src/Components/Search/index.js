import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {searchStyle} from './style';
import {COLORS} from '../../Assets/Theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useTranslation} from 'react-i18next';

const Search = () => {
  const {t} = useTranslation();
  return (
    <View style={searchStyle.searchContainer}>
      <TextInput
        style={searchStyle.inputContainer}
        placeholder={t('search')}
        placeholderTextColor={COLORS.dark}
      />
      <TouchableOpacity style={searchStyle.iconContainer}>
        <AntDesign name="search1" color={COLORS.secondary} size={18} />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
