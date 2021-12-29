import React, { ReactNode } from 'react';
import { Card } from 'react-native-elements';

import styles from './styles/CardStyles';

interface ContainerProps {
  children: any;
  style: any;
}

const CardItem = function ({ children, style }: ContainerProps) {
  return <Card containerStyle={[styles.container, style]}>{children}</Card>;
};

export default CardItem;
