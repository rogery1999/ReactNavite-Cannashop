import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
  default: {
    backgroundColor: 'red',
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageCoverParent: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export const DEFAULT_VALUES = {
  activeBackgroundOpacity: 'rgba(120, 206, 116, 0.15)',
  separatorSpace: {
    minimun: 5,
    low: 8,
    default: 10,
    high: 15,
    maximun: 20,
  },
};
