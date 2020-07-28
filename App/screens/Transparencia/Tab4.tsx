import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    ScrollView, 
    Image
} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Separator, Card } from '../../components';
import ImageView from "react-native-image-viewing";
import styles from './styles';

const Tab4 = () => {

    const B = (props) => <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
    const [visible, setIsVisible] = useState(false);
    const [dataEducacao, setDataEducacao] = useState([
        { key: '1', ano: '2009', valor: 'R$ 13.332.999,97' },
        { key: '2', ano: '2010', valor: 'R$ 20.793.632,28' },
        { key: '3', ano: '2011', valor: 'R$ 25.311.872,55' },
        { key: '4', ano: '2012', valor: 'R$ 25.026.263,57' },
        { key: '5', ano: '2013', valor: 'R$ 27.242.900,20' },
        { key: '6', ano: '2014', valor: 'R$ 30.640.325,96' },
        { key: '7', ano: '2015', valor: 'R$ 28.981.805,71' },
        { key: '8', ano: '2016', valor: 'R$ 41.943.005,48' },
        { key: '9', ano: '2017', valor: 'R$ 43.578.116,33' },
        { key: '10', ano: '2018', valor: 'R$ 59.026.248,12' },
        { key: '11', ano: '2019', valor: 'R$ 57.318.624,04' },

    ]);

    const images = [
        {
            uri: './assets/covid.jpg',
        }
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ImageBackground
                    source={require('../../img/stethoscope-dollar-banknotes_1150-18243.jpg')}
                    style={styles.backgrounImage}
                    imageStyle={styles.imageStyle}
                >
                    <View style={styles.darkOverlay}></View>
                    <View style={styles.imageContainer}>
                        <Text style={styles.UserGreat}>Orçamentos da Saúde</Text>
                        <Text style={styles.userText}>Segundo o Tribunal de Contas da Bahia</Text>
                    </View>

                </ImageBackground>
                <View style={styles.contentContainer}>


                    <Card>
                        <Text style={styles.Tittle}>APANHADO GERAL</Text>
                        <Text style={styles.normalText}>Em 10 anos, o município de Juazeiro-BA, gastou em saúde o valor de R$ 1.261.621.796,97 bilhão.</Text>
                        <Separator />
                        <Text style={styles.normalText}>No mesmo período, o governo municipal fechou três hospitais: Santa Casa de Misericórdia, Só Baby e Semec.</Text>
                        <Separator />
                        <Text style={styles.normalText}>Entre o ano de 2009 e 2019, o governo federal repassou ao município de Juazeiro-BA, o valor de R$ 888.426.003,66, apenas para a área da saúde.</Text>
                        <Text style={styles.ibge}>Fonte: Portal da Educação/Rede Municipal de Juazeiro.</Text>

                    </Card>
                    <Card>
                        <Text style={styles.Tittle}>Orçamentos de recursos próprios gastos na área da saúde nos últimos 10 anos:</Text>
                        <Separator />
                        <View style={styles.boxTextContainer}>
                            <Text style={styles.boxText1}>Ano</Text>
                            <Text style={styles.boxText2}>Valor do Orçamento</Text>

                        </View>
                    </Card>

                    <Card>
                        <FlatList
                            data={dataEducacao}
                            keyExtractor={item => item.key}
                            renderItem={({ item }) => {
                                return (
                                    <>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 5 }}>
                                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#1e213d' }}> {item.ano} </Text>
                                            <Text style={{ textAlign: 'left', color: '#1e213d' }}>{item.valor}</Text>
                                        </View>

                                    </>
                                );
                            }}

                        />
                        <Text style={{ fontWeight: 'bold', alignSelf: 'center', marginTop: 15 }}>TOTAL GERAL: R$ 373.195.793,31.</Text>
                        <Text style={styles.ibge} >Fonte: Tribunal de Contas dos Municípios do Estado da Bahia</Text>
                    </Card>
                    <Card>
    
                        <Text style={styles.normalText}>Para combate à pandemia da COVID-19, a cidade de Juazeiro recebeu do Governo Federal o valor de<B> R$ 19.556.828,29</B></Text>
                        <Text style={styles.ibge}>Fonte: AGÊNCIA SENADO</Text>
                        <Separator />
                        <Text style={styles.normalText}>Além da quantia de <B>R$ 370.000,00</B>, destinados em ação movido pelo Ministério Público do Trabalho.</Text>
                        <Text style={[styles.ibge, {textAlign:'center'}]}>Fonte: ASSOCIAÇÃO DE COMUNICAÇÃO DO MINISTÉRIO PÚBLICO DO TRABALHO.</Text>

                    </Card>

                    <Card>
                        <Text>A câmara de vereadores tem HGU Saúde e plano odontológico.</Text>
                        <Separator/>
                        <TouchableOpacity onPress={() => { setIsVisible(true) }} >
                            <Image
                                resizeMode="contain"
                                style={styles.Img}
                                source={require('./assets/covid.jpg')}
                            />
                        </TouchableOpacity>
                        <ImageView
                            images={images}
                            imageIndex={0}
                            visible={visible}
                            animationType="fade"
                            onRequestClose={() => setIsVisible(false)}
                        />

                    </Card>

                </View>
            </ScrollView>
        </SafeAreaView>
    )


}
export default Tab4;