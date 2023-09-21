import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from './src/Screens/HomeScreen/Home';
import {COLORS} from './src/Assets/Theme/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import UserDashboard from './src/Screens/UserDashboard';
import Store from './src/Screens/AllStores/Store';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Tab from './src/Navigation/Tab';

function App() {
  return <Tab />;
}

const styles = StyleSheet.create({});

export default App;
