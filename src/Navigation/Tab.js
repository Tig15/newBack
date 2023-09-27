import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../Assets/Theme/colors';
import Home from '../Screens/HomeScreen/Home';
import Store from '../Screens/AllStores/Store';
import UserDashboard from '../Screens/UserDashboard';

const Tabs = createBottomTabNavigator();

const Tab = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconname;

            if (route.name === 'HomeScreen') {
              iconname = 'home';
            } else if (route.name === 'AllStores') {
              iconname = 'store';
            } else if (route.name === 'User') {
              iconname = 'person-outline';
            }

            return <MaterialIcons name={iconname} color={color} size={28} />;
          },

          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.light,
          tabBarStyle: {
            backgroundColor: COLORS.lightDark,
            position: 'absolute',
            bottom: 10,
            left: 20,
            right: 20,
            borderRadius: 20,
            elevation: 15,
            height: 45,
          },
          tabBarShowLabel: false,
          headerShown: false,
        })}>
        <Tabs.Screen component={Home} name="HomeScreen" />
        <Tabs.Screen component={Store} name="AllStores" />
        <Tabs.Screen component={UserDashboard} name="User" />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Tab;

const styles = StyleSheet.create({});
