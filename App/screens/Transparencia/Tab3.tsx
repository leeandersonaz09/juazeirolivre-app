import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    Image
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../../components/Card'
import styles from './styles';

const Tab3 = () => {

    const [dataEducacao, setDataEducacao] = useState([
        {
            key: '1',
            texto: 'A FOLHA DE PAGAMENTO DA CÂMARA DE VEREADORES, TEM 33 PÁGINAS. A CÂMARA DE VEREADORES TEM 360 FUNCIONÁRIOS. A FOLHA DE PAGAMENTO DA CÂMARA DE VEREADORES, GERA UMA DESPESA MENSAL DE QUASE 1 MILHÃO DE REAIS, PARA O CONTRIBUINTE.'
        },
        { key: '2', texto: 'CADA VEREADOR DE JUAZEIRO GANHA POR MÊS: R$ 12.661,00.' },
        { key: '3', texto: 'CADA VEREADOR DE JUAZEIRO GANHA POR ANO: R$ 164.593,00.' },
        { key: '4', img:'https://0201.nccdn.net/1_2/000/000/0c7/545/IMG-20200301-WA0008-960x430.jpg', texto: 'CADA VEREADOR DE JUAZEIRO GANHA POR MANDATO MAIS DE MEIO MILHÃO DE REAIS (R$ 658.372,00)' },
        { key: '5', texto: 'Quem tem dois mandatos recebeu, aproximadamente, R$ 1.316.744,00' },
        { key: '6', texto: 'Quem tem três mandatos recebeu, aproximadamente, R$ 1.975.116,00.' },
    ]);

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
                        <Text style={styles.UserGreat}>Orçamentos da Educação</Text>
                        <Text style={styles.userText}>Segundo o Tribunal de Contas da Bahia</Text>
                    </View>

                </ImageBackground>
                <View style={styles.contentContainer}>

                        <FlatList
                            data={dataEducacao}
                            keyExtractor={item => item.key}
                            renderItem={({ item }) => {
                                return (
                                    <><Card>
                                        <View >
                                            <Text style={{ textAlign: 'justify', paddingHorizontal: 5 }}> {item.texto} </Text>
                                            <Image source={item.img}/>
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