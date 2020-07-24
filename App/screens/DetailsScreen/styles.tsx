import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
      },
    //Shimmer
      headerTitle: {
        fontSize: 20,
        color: colors.white,
        fontWeight: "bold",
        fontFamily: "SFProDisplay_bold",
    },
    tittle: {
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: "SFProDisplay_bold",
    },
      Img: {
        flex: 1,
        width: width,
          height: 200,
        marginBottom:20
      },
      zoomWrapper: {
        flex: 1,
    
      },
      zoomableView: {
        padding: 10,
        backgroundColor: colors.white,
      },
      avatarImage: {
        width: 150,
        height: 150,
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: 150
      },
      Text: {
        textAlign: 'justify',
        alignContent: 'center',
        marginTop: 10,
        marginBottom: 15,
        marginHorizontal: 10,
        fontFamily: "SFProDisplay_regular",
        fontSize: 18,
    
      },
    Ref: {
        fontStyle: 'italic',
        color: "#808080",
        textAlign: 'center',
        fontFamily: "SFProDisplay_regular",
        fontSize: 18,
        marginHorizontal: 10,
        marginBottom: 10
    },
});

export default styles;