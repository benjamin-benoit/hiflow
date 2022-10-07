import { StyleSheet } from 'react-native';
import Theme from '../../themes';

export default StyleSheet.create({
  container: {
    backgroundColor: Theme.palette.white,
    borderRadius: 5,
    marginBottom: 17,
  },
  mainData: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fromToContainer: {
    flexDirection: 'row',
  },
  iconsContainer: {
    flexDirection: 'column',
  },
  dashedPoints: {
    height: 37,
    width: 18,
    borderWidth: 1,
    borderRightStyle: 'dashed',
  },
  textContainer: {
    marginLeft: 12,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  city: {
    fontFamily: 'MerriweatherSans-Medium',
    fontSize: 17,
  },
  date: {
    fontFamily: 'MerriweatherSans-Medium',
    fontSize: 12,
    color: Theme.palette.greydarker,
  },
  rightBloc: {
    flexDirection: 'column',
  },
  quotation: {
    alignSelf: 'flex-start',
    backgroundColor: Theme.palette.blue,
    borderRadius: 3,
  },
  quotationText: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'MerriweatherSans-Bold',
    color: Theme.palette.white,
    fontSize: 12,
  },
  price: {
    flexDirection: 'row',
    marginTop: 17,
  },
  priceText: {
    fontFamily: 'MerriweatherSans-Bold',
    color: Theme.palette.blue,
    fontSize: 25,
  },
  star: {
    fontFamily: 'MerriweatherSans-Bold',
    color: Theme.palette.bluelight,
    fontSize: 20,
  },
  kilometers: {
    paddingLeft: 5,
  },
  kilometersText: {
    fontFamily: 'MerriweatherSans-Bold',
    color: Theme.palette.blue,
    fontSize: 12,
  },
  client: {
    marginLeft: 15,
    marginTop: 17,
    marginBottom: 12,
  },
  clientText:{
    fontFamily: 'MerriweatherSans-Bold',
    color: Theme.palette.blue,
    fontSize: 17,
  },
  bottomData: {
    flexDirection: 'row',
    paddingLeft: 23,
    paddingTop: 19,
    paddingBottom: 16,
    paddingRight: 15,
    borderTopColor: Theme.palette.greydarker,
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  typeCardContainer: {
    flexDirection: 'row',
  },
  typeCard: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 5,
    backgroundColor: Theme.palette.bluelighter,
    borderRadius: 3,
  },
  typeText: {
    fontFamily: 'MerriweatherSans-Medium',
    fontSize: 12,
    color: Theme.palette.blue,
  },
  missionIdText: {
    fontFamily: 'MerriweatherSans-Bold',
    color: Theme.palette.greydarker,
    fontSize: 11,
    marginLeft: 'auto',
  }
});