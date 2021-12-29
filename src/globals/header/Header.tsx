import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, Image, View } from 'react-native';

import { CaretLeftIcon } from '../Icons';

import styles from './styles/HeaderStyles';

interface HeaderProps {
  title: string;
  back: any;
}

const Header = function ({ title, back }: HeaderProps) {
  return (
    <View style={styles.container}>
      <CaretLeftIcon size={28} onPress={back} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightContainer} />
    </View>
  );
};

export default Header;
