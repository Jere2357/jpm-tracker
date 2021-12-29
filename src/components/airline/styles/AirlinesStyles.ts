import { StyleSheet, Platform } from 'react-native';

const isIos = Platform.OS === 'ios';

const AirlinesStyle = StyleSheet.create({
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
  bottomComponent: {
    marginBottom: '15%',
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 17,
  },
  link: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 17,
    color: 'blue',
  },
});

export default AirlinesStyle;
