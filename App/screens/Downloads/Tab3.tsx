import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    Image
} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ImageView from "react-native-image-viewing";
import Card from '../../components/Card';
import Separator from '../../components/Separator';
import styles from './styles';

const Tab3 = () => {
    const [visible, setIsVisible] = useState(false);
    const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>

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
        <SafeAreaView style={styles.container}>


            <ScrollView>
                <ImageBackground
                    source={{ uri: 'https://www.investmentexecutive.com/wp-content/uploads/sites/3/2018/04/800x600-supervision-oversight-regulation-compliance-aleutie-50508424.jpg' }}
                    style={styles.backgrounImage}
                    imageStyle={styles.imageStyle}
                >
                    <View style={styles.darkOverlay}></View>
                    <View style={styles.imageContainer}>
                        <Text style={styles.UserGreat}>Fiscalização e Transparência</Text>
                        <Text style={styles.userText}>Segundo o Tribunal de Contas da Bahia</Text>
                    </View>

                </ImageBackground>
                <View style={styles.contentContainer}>
                    <View style={styles.card}>
                        <View style={styles.cardContent}>
                            <Image
                                resizeMode="contain"
                                style={styles.Img}
                                source={require('../../assets/ed03.jpg')}
                            />
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )


}
export default Tab3;