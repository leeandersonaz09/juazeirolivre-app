import { StyleSheet } from 'react-native';
import { general, fonts } from '../../styles';

const styles = StyleSheet.create({

    ...general,

    headerTitle: {
        fontSize: 20,
        fontWeight: "500",
        color: "#fff",
        fontWeight: "bold",
    },
    Img: {
        flex: 1,
        width: width,
        height: 200,
        transform: [{ scale: scale }],

    },
    zoomWrapper: {
        flex: 1,
        overflow: 'hidden',
    },
    zoomableView: {
        padding: 10,
        backgroundColor: '#fff',
    },
    avatarImage: {
        width: 150,
        height: 150,
        borderWidth: 2,
        borderColor: '#3490dc',
        borderRadius: 150
    },
    Text: {
        textAlign: 'justify',
        alignContent: 'center',
        marginTop: 10,
        marginBottom: 15,
        marginHorizontal: 10,
        fontSize: 18,

    },
    Ref: {
        fontStyle: 'italic',
        color: "#808080",
        textAlign: 'center',
        fontSize: 18,
        marginHorizontal: 10,
        marginBottom: 10
    }
});

export default styles;