import { StyleSheet } from 'react-native';
import Theme from '../../themes';

export default StyleSheet.create({
  container: {
    width: '100%',
    fontSize: 13,
    textAlign: 'center',
    backgroundColor: Theme.palette.white,
  },
  menuElement: {
    fontFamily: 'MerriweatherSans-Medium',
    flexDirection: 'row',
    height: 63,
    marginLeft: 20,
    borderBottomWidth: 1,
    borderColor: Theme.palette.grey,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
  },
  textMenu: {
    fontFamily: 'MerriweatherSans-Medium',
  }
});