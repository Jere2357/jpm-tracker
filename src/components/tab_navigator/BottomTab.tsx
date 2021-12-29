import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, Image, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Airlines from '../airline/Airlines';
import CovidCountries from '../covid/CovidCountries';

import { AirplaneIcon, CovidIcon } from '../../globals/Icons';

import styles from './styles/TabStyles';

import routes from '../../globals/navigation/Routes';

const { Navigator, Screen } = createBottomTabNavigator();

const isIos = Platform.OS === 'ios';

const { AIRLINES, COVID_COUNTRIES } = routes;

const BottomTab = function () {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator
        initialRouteName={AIRLINES}
        screenOptions={{
          tabBarActiveTintColor: '#0CA397',
          tabBarLabelStyle: { fontSize: 14, marginBottom: isIos ? -15 : 10 },
          tabBarStyle: {
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            height: '10%',
          },
          tabBarHideOnKeyboard: true,
        }}
      >
        <Screen
          name={AIRLINES}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? <AirplaneIcon color="#8CB208" /> : <AirplaneIcon />,
            headerShown: false,
          }}
          component={Airlines}
        />
        <Screen
          name={COVID_COUNTRIES}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? <CovidIcon color="#F26737" /> : <CovidIcon />,
            headerShown: false,
          }}
          component={CovidCountries}
        />
      </Navigator>
    </SafeAreaView>
  );
};

export default BottomTab;
