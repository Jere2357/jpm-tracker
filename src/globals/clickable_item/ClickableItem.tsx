import React from 'react';
import { Pressable, Text, View } from 'react-native';

import Card from '../card/Card';

import { CaretRightIcon } from '../Icons';

import styles from './styles/ItemStyles';

const ClickableItem = function ({ item, onSubmit }: any) {
  return (
    <Pressable onPress={onSubmit}>
      <Card>
        <View style={styles.container}>
          <Text style={styles.item}>{item}</Text>
          <CaretRightIcon />
        </View>
      </Card>
    </Pressable>
  );
};

export default ClickableItem;
