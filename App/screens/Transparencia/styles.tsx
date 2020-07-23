import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles';

// fonts size and colors of import fonts
/* 
    regular: 15,
    medium: 12,
    small: 11,
    tiny: 10,
    headerTittle: 20,
    big: 38

    header: '#333333',
    primary: '#3B3B3B',
    gray: '#d8d8d8',
    white: '#fff',
    yellow: "#ffcc00",
    black: '#000'

*/
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  //index.jsx
  headerTitle: {
    fontSize: 20,
    color: colors.white,
    marginTop: 25,
    fontWeight: "bold",
  },
  TabText: {
    color: colors.white,
  },
  TabIcon: {
    padding: 10,
    color: colors.yellow,
  },

  //Tabs communs style for Tab2, Tab3 and Tab4

  contentContainer: {
    padding: 10,

  },
  backgrounImage: {
    width: '100%',
    height: 240,

  },
  darkOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 240,
    backgroundColor: colors.black,
    opacity: 0.2,
    borderBottomRightRadius: 65
  },
  imageContainer: {
    paddingTop: 50,
    paddingLeft: 16
  },
  UserGreat: {
    fontSize: fonts.big,
    fontWeight: 'bold',
    color: colors.white,
  },
  userText: {
    fontSize: fonts.regular,
    fontWeight: 'normal',
    color: colors.white,
  },

  boxContainer: {
    alignContent: 'center',
    alignItems: "center",

  },

  boxTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },

  boxText1: {

    fontWeight: 'bold',
    fontSize: fonts.regular

  },

  boxText2: {

    fontSize: fonts.regular
  },


  Tittle: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },

  ibge: {
    fontStyle: 'italic',
    fontSize: fonts.tiny,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10
  },

})

export default styles;