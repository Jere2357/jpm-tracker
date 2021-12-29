import { StyleSheet, Platform } from 'react-native';

const isIos = Platform.OS === 'ios';

const CardStyle = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#030202',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: isIos ? 0.17 : 0.57,
    shadowRadius: 15.19,
    elevation: 2,
  },
});

export default CardStyle;
