import { StyleSheet } from 'react-native';
import Theme from '../../themes';

export default StyleSheet.create({
  container: {
    fontFamily: 'MerriweatherSans-Medium',
    height: 50,
    backgroundColor: Theme.palette.white,
    borderColor: Theme.palette.grey,
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 5,
    padding: 15,
  },
  label: {
    fontFamily: 'MerriweatherSans-Bold',
    fontSize: 15,
    marginTop: 15,
  },
  erreur: {
    marginTop: 2,
    fontFamily: 'MerriweatherSans-Medium',
    color: Theme.palette.greydarker,
  }
});