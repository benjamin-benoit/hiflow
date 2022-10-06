import { StyleSheet } from 'react-native';
import Theme from '../../../common/themes';

export default StyleSheet.create({
  profile: {
    marginTop: 35,
    width: '100%',
    fontSize: 13,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    marginTop: 31,
    shadowColor: Theme.palette.grey,
    shadowRadius: 10,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  userName: {
    marginTop: 15,
    fontFamily: 'MerriweatherSans-Bold',
    fontSize: 19,
  },
  userMail: {
    fontFamily: 'MerriweatherSans-Medium',
    fontSize: 12,
    color: Theme.palette.greylight
  }
});