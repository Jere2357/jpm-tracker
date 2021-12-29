import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTab from '../../components/tab_navigator/BottomTab';
import CovidProvinces from '../../components/covid/CovidProvinces';

import routes from '../../globals/navigation/Routes';

const { Navigator, Screen } = createStackNavigator();

const { BOTTOM_TAB, COVID_PROVINCES } = routes;

const MainStack = function () {
  return (
    <Navigator initialRouteName={BOTTOM_TAB}>
      <Screen
        options={{ headerShown: false }}
        name={BOTTOM_TAB}
        component={BottomTab}
      />

      <Screen
        options={{ headerShown: false }}
        name={COVID_PROVINCES}
        component={CovidProvinces}
      />
    </Navigator>
  );
};

export default MainStack;
