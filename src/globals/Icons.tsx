/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';

export const AirplaneIcon = function (props: any) {
  return <Ionicons name="airplane" size={26} color="black" {...props} />;
};

export const CovidIcon = function (props: any) {
  return (
    <MaterialIcons name="coronavirus" size={26} color="black" {...props} />
  );
};

export const CaretRightIcon = function (props: any) {
  return <AntDesign name="right" size={20} color="black" {...props} />;
};

export const CaretLeftIcon = function (props: any) {
  return <AntDesign name="left" size={20} color="black" {...props} />;
};
