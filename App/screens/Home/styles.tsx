import { StyleSheet } from 'react-native';
import { general, fonts } from '../../styles';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
    //Shimmer
    header2: {
        flexDirection: 'row',
        width: '100%',
        margin: 8,
      },
      avatar: { borderRadius: 30, width: 60, overflow: 'hidden' },
      upperText: { marginLeft: 8, marginTop: 14 },
      lowerText: { marginLeft: 8, marginTop: 4 },
      textLine: {marginTop: 8, marginHorizontal:8 },

    headerTitle: {
        fontSize: fonts.headerTittle,
        color: "#fff",
        fontWeight: "bold",
    },

    header: {
        height: 60,
        width: '100%',
        backgroundColor: '#3f51b5',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        shadowOffset: {width:1, height:1},
        shadowColor:'#333',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation:1
    },
    

    input: {
        height: 40,
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 5,
        paddingLeft: 10,
    },

    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 40,
        borderRadius: 20,
        margin: 10,
    },

    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },

    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerImage: {
        width: "100%",
        height: 300,
    },

    contentContainer: {
        position: 'relative',
        left: 0, top: -50,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        paddingTop: 40,
        backgroundColor: '#fff'
    },

    cardContainer: {
        marginTop: 15,

    },

    avatarImage: {
        width: 120,
        height: 120,
        borderWidth: 2,
        borderColor: '#3490dc',
        borderRadius: 150
    },

    Tittle: {
        fontWeight: "bold",
        marginBottom: 5,
        alignSelf: "center",
        color: '#3b49b6',
        fontSize: 20
    },

    subTittle: {
        fontWeight: 'bold',
        fontStyle: "italic",
        textAlign: "justify",
        marginTop: 10

    },

    Text: {
        marginTop: 5,
        textAlign: 'justify'
    },
    
  });
  
  export default styles;