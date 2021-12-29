import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles/HeaderStyles';

const EmptyHeader = function () {
  return (
    <View style={[styles.container, styles.emptyContainer]}>
      <Text style={[styles.title, styles.emptyLabel]}>No Items Found</Text>
    </View>
  );
};

export default EmptyHeader;
