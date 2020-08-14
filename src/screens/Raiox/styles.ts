import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles';

// fonts size of import fonts
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
    },

    backgrounImage: {
        width: '100%',
        height: 270,
    },

    darkOverlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        height: 270,
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

    contentContainer: {
        padding: 15,
    },

    headerTitle: {
        fontSize: fonts.header,
        color: colors.white,
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

    Text: {
        textAlign: "justify",
        fontSize: fonts.regular,
    },


    Tittle: {
        fontSize: fonts.headerTittle,
        marginBottom: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
    },

    ibge: {
        fontStyle: 'italic',
        fontSize: fonts.tiny,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10
    },

});

export default styles;