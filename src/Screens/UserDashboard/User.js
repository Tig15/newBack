import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {userStyle} from './style';
import {ScrollView} from 'react-native-virtualized-view';
import {COLORS} from '../../Assets/Theme/colors';
import StyledText from '../../Components/Core/StyledText';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const UserDashboard = () => {
  const navigation = useNavigation();
  return (
    <ScrollView showsHorizontalScrollIndicator={true}>
      <View style={userStyle.firstContainer}>
        <Text style={{color: COLORS.mono}}>User Dash Board</Text>
      </View>
      <View style={userStyle.secondContainer}>
        <View style={userStyle.acc}>
          <TouchableOpacity>
            <StyledText>Your Account</StyledText>
          </TouchableOpacity>
        </View>
        <View style={userStyle.acc}>
          <TouchableOpacity
            style={userStyle.dist}
            onPress={() => navigation.navigate('Fave')}>
            <Entypo name="heart" size={24} color={COLORS.deus} />
            <Text style={{fontSize: 16, color: COLORS.dark, marginTop: 1}}>
              Favourite
            </Text>
          </TouchableOpacity>
        </View>
        <View style={userStyle.acc}>
          <TouchableOpacity>
            <StyledText>About US</StyledText>
          </TouchableOpacity>
        </View>
        <View style={userStyle.acc}>
          <TouchableOpacity>
            <StyledText>FAQ</StyledText>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserDashboard;
