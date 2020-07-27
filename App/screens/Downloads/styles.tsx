import { StyleSheet } from 'react-native';
import { colors, fonts, metrics} from '../../styles';

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
    fontSize: fonts.header,
    color: colors.white,
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
    marginTop:-55

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
    borderBottomRightRadius: 60,
  },

  imageContainer: {
    paddingTop: 50,
    paddingLeft: 16
  },

  imageStyle: {
    borderBottomRightRadius: 60,
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
    marginBottom: 10
  },

  ibge: {
    fontStyle: 'italic',
    fontSize: fonts.tiny,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 10
  },

  normalText: {
    textAlign: 'justify'
  },
  //Tab3

  Img: {
    flex: 1,
    width: metrics.screenWidth - 10 * 100,
    resizeMode:"contain",
    height: metrics.screenHeight - 400,
    justifyContent: 'center',
    alignItems:'center'
  },

  Textcard: {
    textAlign: 'justify',
    fontSize: fonts.regular
  },
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor:'#fff',
    shadowOffset: {width:1, height:1},
    shadowColor:'#333',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginHorizontal: 4,
    marginVertical: 6
},

cardContent: {
    marginHorizontal:12,
    marginVertical: 10,
    padding: 5
}

})

export default styles;