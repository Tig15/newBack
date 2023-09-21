import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {footStyle} from './style';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../Assets/Theme/colors';
import {useTranslation} from 'react-i18next';

const Footer = () => {
  const {t} = useTranslation();
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[COLORS.uno, COLORS.deus]}
      style={footStyle.mainFoot}>
      <View style={footStyle.textContents}>
        <Text style={footStyle.invite}>{t('ref_one')}</Text>
        <Text style={footStyle.multText}>
          {t('eve')}. {t('sin')}. {t('time')}
        </Text>
      </View>
      <View style={footStyle.refContent}>
        <Image
          style={footStyle.refImage}
          source={{
            uri: 'https://cdni.iconscout.com/illustration/premium/thumb/referral-marketing-campaign-by-businessman-5200850-4340632.png',
          }}
        />
      </View>
      <TouchableOpacity style={footStyle.refers}>
        <Text style={footStyle.refText}>{t('ref_earn')}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Footer;

const styles = StyleSheet.create({});
