import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import FavList from '../Components/FavList';
import Home from '../Screens/HomeScreen/Home';
import Store from '../Screens/AllStores/Store';
import UserDashboard from '../Screens/UserDashboard/User';

const Stack = createNativeStackNavigator();

const StackUserNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="User" component={UserDashboard} />
      <Stack.Screen name="Fave" component={FavList} />
    </Stack.Navigator>
  );
};

export default StackUserNavigator;
