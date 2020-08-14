import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    Image
} from 'react-native';
import { colors as color } from '../../styles';
import { useTheme } from '@react-navigation/native';
import { WaveSvg, View as MyView } from '../../components';
import styles from './styles';

const Tab3 = () => {
    const [visible, setIsVisible] = useState(false);
    const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
    const { colors } = useTheme();

    const [data2017] = useState([

        { key: '1', nome: 'FÁBIO (FABINHO DE PINHÕES)', faltas: '28' },
        { key: '2', nome: 'GLEIDSON MEDRADO', faltas: '22' },
        { key: '3', nome: 'HÉLIO', faltas: '17' },
        { key: '4', nome: 'JEAN CHARLES', faltas: '20' },
        { key: '5', nome: 'NILSON BARBOSA (PROFESSOR NILSON)', faltas: '14' },

    ]);
    const [data2018] = useState([

        { key: '1', nome: 'ALEX TANURI', faltas: '25' },
        { key: '2', nome: 'GLEIDSON MEDRADO', faltas: '25' },
        { key: '3', nome: 'HÉLIO', faltas: '26' },
        { key: '4', nome: 'JEAN CHARLES', faltas: '24' },
        { key: '5', nome: 'NILSON BARBOSA (PROFESSOR NILSON)', faltas: '18' },
        { key: '6', nome: 'ANDERSON DA CRUZ (DA ILUMINAÇÃO)*', faltas: '14' },

    ]);
    const [data2019] = useState([

        { key: '1', nome: 'BENEDITO (BENÉ MARQUES)', faltas: '17' },
        { key: '2', nome: 'GLEIDSON MEDRADO', faltas: '21' },
        { key: '3', nome: 'HÉLIO', faltas: '25' },
        { key: '4', nome: 'JEAN CHARLES', faltas: '35' },
        { key: '5', nome: 'NILSON BARBOSA (PROFESSOR NILSON)', faltas: '24' },
        { key: '6', nome: 'ANDERSON DA CRUZ (DA ILUMINAÇÃO)*', faltas: '18' },
        { key: '7', nome: 'AMADEUS', faltas: '21' },
        { key: '8', nome: 'DOMINGOS (DOMINGÃO DA ALIANÇA)', faltas: '24' },


    ]);

    const images = [
        {
            uri: "https://0201.nccdn.net/1_2/000/000/0c7/545/IMG-20200301-WA0008-960x430.jpg",
        }
    ];

    return (
        <MyView style={styles.container}>
            <WaveSvg
                customStyles={styles.svgCurve}
                customHeight={320}
                customTop={260}
                customBgColor={color.yellow}
                customWavePattern="M0,288L1440,32L1440,0L0,0Z"
            />

            <ScrollView>
                <ImageBackground
                    source={require('./assets/fiscalizacao.jpg')}
                    style={styles.backgrounImage}
                    imageStyle={styles.imageStyle}
                >
                    <View style={styles.darkOverlay}></View>
                    <View style={styles.imageContainer}>
                        <Text style={styles.UserGreat}>Fiscalização e Transparência</Text>
                    </View>

                </ImageBackground>
                <View style={styles.contentContainer}>
                    <View style={[styles.card, { backgroundColor: colors.background }]}>
                        <View style={styles.cardContent}>
                            <Image
                                resizeMode="contain"
                                style={styles.Img}
                                source={require('./assets/ed01.jpg')}
                            />
                        </View>
                    </View>

                </View>
            </ScrollView>
        </MyView>
    )


}
export default Tab3;