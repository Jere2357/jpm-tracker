import { StyleSheet, Platform } from 'react-native';

const isIos = Platform.OS === 'ios';

const CovidCountryStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 25,
  },
  title: {
    marginBottom: '6%',
    marginTop: isIos ? 0 : '6%',
    fontSize: 28,
  },
  region: {
    marginBottom: '4%',
    color: '#7E8484',
    fontSize: 18,
  },
  bottomComponent: {
    marginBottom: '15%',
  },
  provinceContainer: {
    flexDirection: 'row',
  },
  covidIcon: {
    marginTop: 13,
    marginRight: 5,
  },
  provinceLabel: {
    marginVertical: 10,
    fontSize: 22,
  },
  dateLabel: {
    marginBottom: 10,
    fontSize: 14,
  },
  textPrimary: {
    marginVertical: 10,
    fontSize: 18,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 17,
  },
});

export default CovidCountryStyle;
