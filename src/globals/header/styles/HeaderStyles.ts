import { StyleSheet, Platform } from 'react-native';

const isIos = Platform.OS === 'ios';

const HeaderStyles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#030202',
    justifyContent: 'space-between',
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: isIos ? 0.17 : 0.57,
    shadowRadius: 15.19,
    elevation: 12,
    width: '100%',
    marginVertical: '6%',
  },
  emptyContainer: {
    flexDirection: 'column',
  },
  emptyLabel: {
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    alignSelf: 'center',
  },
  rightContainer: {
    width: '6%',
  },
});

export default HeaderStyles;
