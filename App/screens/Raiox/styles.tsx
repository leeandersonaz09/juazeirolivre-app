import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
},
backgrounImage:{
    width:'100%',
    height:270,
    
},
darkOverlay: {
    position:'absolute',
    top:0,
    right: 0,
    left:0,
    height:270,
    backgroundColor:'#000',
    opacity:0.2,
    borderBottomRightRadius:65
},
imageContainer:{
    paddingTop:50,
    paddingLeft:16
},
UserGreat:{
    fontSize:38,
    fontWeight:'bold',
    color:'white',
},
userText: {
    fontSize:16,
    fontWeight:'normal',
    color:'white',
},

contentContainer: {
    padding: 15,

},

headerTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
},


boxContainer: {
    alignContent: 'center',
    alignItems: "center",
    textAlign: 'justify'

},

boxTextContainer: {
    flexDirection: 'row',

},

boxText1: {
    paddingRight: 50,
    paddingLeft: "15%",
    backgroundColor: '#d8d8d8',
    borderWidth: 1,
    fontWeight: 'bold'

},

boxText2: {
    paddingRight: 50,
    paddingLeft: 50,
    borderWidth: 1

},

Tittle: {
    fontSize: 20,
    marginBottom:15,
    fontWeight: 'bold',
    alignSelf: 'center',
},

ibge: {
    fontStyle: 'italic',
    fontSize: 10,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10
},
  });
  
  export default styles;