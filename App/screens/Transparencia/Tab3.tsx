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
import styles from './styles';

const Tab3 = () => {
    const [visible, setIsVisible] = useState(false);
    const [data, setData] = useState([
        {
            key: '1',
            texto: `A folha de pagamento da câmara de vereadores, tem 33 páginas. A câmara de vereadores tem 360 funcionários. A folha de pagamento da câmara de vereadores, gera uma despesa mensal de quase 1 milhão de reais, para o contribuinte.`
        },
        {
            key: '2',
            texto: `Cada vereador de juazeiro ganha R$ 12.661,00 por mês, R$ 164.593,00 por ano e mais de meio milhão de reais (R$ 658.372,00) por mandato.`
        },
        {
            key: '3',
            texto: `Quem tem dois mandatos recebeu, aproximadamente, R$ 1.316.744,00 e quem tem três mandatos recebeu, aproximadamente, R$ 1.975.116,00.`
        },
        {
            key: '4',
            texto: 'A câmara de vereadores tem HGU Saúde e plano odontológico.',
            img: "https://0201.nccdn.net/1_2/000/000/0c7/545/IMG-20200301-WA0008-960x430.jpg"
        },
        {
            key: '5',
            tittle: 'Frequência',

            texto: `No que tange à frequência dos legisladores nas sessões ordinárias, a lei orgânica do município de Juazeiro-BA, no seu artigo 34, e o regimento interno da câmara de vereadores, no seu artigo 64, destaca no seu inciso quinto, e terceiro, respectivamente, que o vereador que faltar um terço das sessões ordinárias, sem justificativa, perderá o mandato.

Lei orgânica do Município:
            
Art. 34 - Perde o Mandado o Vereador que:
            
V – deixar de comparecer, em cada sessão legislativa, à terça parte das sessões ordinárias da Câmera, salvo licença por ela autorizada;  
            
Regimento interno da câmara de vereadores
            
Art. 64. Perderá o mandato o Vereador:
                        
III – que deixar de comparecer, em cada sessão legislativa, à terça parte das sessões ordinárias da Casa, salvo licença ou missão por ela autorizada;`
}, 
{
    key: '6',
    tittle: 'Em 2017, foram 69 sessões ordinárias, sendo que um terço de faltas seria referente a vinte e três ausências. Esses são os vereadores mais faltosos do ano:',
    faltas: 'true'
}

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
                    source={require('../../img/money-1632055_960_720.webp')}
                    style={styles.backgrounImage}
                    imageStyle={{ borderBottomRightRadius: 65 }}
                >
                    <View style={styles.darkOverlay}></View>
                    <View style={styles.imageContainer}>
                        <Text style={styles.UserGreat}>A câmara mais cara da história</Text>
                        <Text style={styles.userText}>Segundo o Tribunal de Contas da Bahia</Text>
                    </View>

                </ImageBackground>
                <View style={styles.contentContainer}>

                    <FlatList
                        data={data}
                        keyExtractor={item => item.key}
                        renderItem={({ item }) => {
                            return (
                                <>
                                    <Card>
                                        <View >
                                            {item.tittle ? <Text style={styles.Tittle}>{item.tittle}</Text> : null}
                                            <Text style={styles.Textcard}> {item.texto} </Text>

                                            <TouchableOpacity onPress={() => { setIsVisible(true) }} >
                                                {item.img
                                                    ? (
                                                        <Image
                                                        resizeMode="contain"
                                                        style={styles.Img}
                                                        source={{ uri: item.img }} />
                                                    ) : null
                                                }
                                                
                                            </TouchableOpacity>
                                            <ImageView
                                                images={images}
                                                imageIndex={0}
                                                visible={visible}
                                                animationType="fade"
                                                onRequestClose={() => setIsVisible(false)}
                                            />
                                            
                                        </View>
                                </Card>
                                </>
                            );
                        }}

                    />

                    <Text style={styles.ibge} >Fonte: Tribunal de Contas dos Municípios do Estado da Bahia</Text>


                </View>
            </ScrollView>
        </SafeAreaView>
    )


}
export default Tab3;