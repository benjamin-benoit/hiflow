import { StyleSheet } from 'react-native';
import Theme from '../common/themes';

export const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
  },
  headerTitle: {
    fontFamily: 'MerriweatherSans-Bold',
    height: 25,
    color: Theme.palette.white,
    fontSize: 20,
  },
});
