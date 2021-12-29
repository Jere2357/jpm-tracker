import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './src/globals/navigation/MainStack';

const App = function () {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
