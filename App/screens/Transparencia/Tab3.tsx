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
                    <Card>
                        <Text style={styles.Textcard}>
                            A folha de pagamento da câmara de vereadores, tem 33 páginas.
                            A câmara de vereadores tem 360 funcionários. A folha de pagamento da câmara de vereadores,
                            gera uma despesa mensal de quase 1 milhão de reais, para o contribuinte.
                    </Text>

                        <View style={styles.separatorContainer} />

                        <Text style={styles.Textcard}>
                            Cada vereador de juazeiro ganha R$ 12.661,00 por mês, R$ 164.593,00 por ano e
                            mais de meio milhão de reais (R$ 658.372,00) por mandato.
                    </Text>

                        <View style={styles.separatorContainer} />

                        <Text style={styles.Textcard}>
                            Quem tem dois mandatos recebeu, aproximadamente, R$ 1.316.744,00 e
                            quem tem três mandatos recebeu, aproximadamente, R$ 1.975.116,00.
                    </Text>

                    </Card>
                    <Card>
                        <Text>A câmara de vereadores tem HGU Saúde e plano odontológico.</Text>
                        <View style={styles.separatorContainer} />
                        <TouchableOpacity onPress={() => { setIsVisible(true) }} >
                            <Image
                                resizeMode="contain"
                                style={styles.Img}
                                source={{ uri: 'https://0201.nccdn.net/1_2/000/000/0c7/545/IMG-20200301-WA0008-960x430.jpg' }}
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
                    <Card>
                        <Text style={styles.Tittle}>Frequência</Text>
                        <Text style={styles.Textcard}>
                            No que tange à frequência dos legisladores nas sessões ordinárias,
                            a lei orgânica do município de Juazeiro-BA, no seu artigo 34, e o regimento
                            interno da câmara de vereadores, no seu artigo 64, destaca no seu inciso quinto,
                            e terceiro, respectivamente, que o vereador que faltar um terço das sessões ordinárias,
                            sem justificativa, perderá o mandato.
                        </Text>
                        <View style={styles.separatorContainer} />
                        <Text style={styles.Tittle}>Lei orgânica do Município:</Text>

                        <Text style={styles.Textcard}>
                            Art. 34 - Perde o Mandado o Vereador que:
                        </Text>

                        <Text style={styles.Textcard}>
                            V – deixar de comparecer, em cada sessão legislativa,
                            à terça parte das sessões ordinárias da Câmera, salvo licença por ela autorizada;
                        </Text>

                        <Text style={styles.Textcard}>
                            Regimento interno da câmara de vereadores
                        </Text>

                        <Text style={styles.Textcard}>
                            Art. 64. Perderá o mandato o Vereador:
                        </Text>

                        <Text style={styles.Textcard}>
                            III – que deixar de comparecer, em cada sessão legislativa,
                            à terça parte das sessões ordinárias da Casa, salvo licença ou missão por ela autorizada;
                        </Text>


                    </Card>

                    <Card>
                        <Text style={styles.Tittle}>Em 2017, foram 69 sessões ordinárias, sendo que um terço
                        de faltas seria referente a vinte e três ausências. Esses são os vereadores mais faltosos do ano:</Text>
                        <View style={styles.separatorContainer} />

                        <View style={styles.boxTextContainer}>
                            <Text style={styles.boxText1}>Vereador(a)</Text>
                            <Text style={styles.boxText2}>Faltas</Text>
                        </View>
                        <View style={styles.separatorContainer} />

                        <FlatList
                            data={data2017}
                            keyExtractor={item => item.key}
                            renderItem={({ item }) => {
                                return (
                                    <>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 5 }}>
                                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#1e213d' }}> {item.nome} </Text>
                                            <Text style={{ textAlign: 'left', color: '#1e213d' }}>{item.faltas}</Text>
                                        </View>

                                    </>
                                );
                            }}

                        />

                    </Card>

                    <Card>
                        <Text style={styles.Tittle}>Em 2018, foram 72 sessões ordinárias, sendo que um terço de faltas seria
                         referente a vinte e quatro ausências. Esses são os vereadores mais faltosos do ano:</Text>
                        <View style={styles.separatorContainer} />

                        <View style={styles.boxTextContainer}>
                            <Text style={styles.boxText1}>Vereador(a)</Text>
                            <Text style={styles.boxText2}>Faltas</Text>
                        </View>
                        <View style={styles.separatorContainer} />

                        <FlatList
                            data={data2018}
                            keyExtractor={item => item.key}
                            renderItem={({ item }) => {
                                return (
                                    <>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 5 }}>
                                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#1e213d' }}> {item.nome} </Text>
                                            <Text style={{ textAlign: 'left', color: '#1e213d' }}>{item.faltas}</Text>
                                        </View>

                                    </>
                                );
                            }}

                        />

                    </Card>

                    <Card>
                        <Text style={styles.Tittle}>
                            Em 2019, foram 67 sessões ordinárias, sendo que um terço
                            de faltas seria referente a vinte e duas ausências. Esses são os vereadores mais faltosos:
                        </Text>
                        <View style={styles.separatorContainer} />

                        <View style={styles.boxTextContainer}>
                            <Text style={styles.boxText1}>Vereador(a)</Text>
                            <Text style={styles.boxText2}>Faltas</Text>
                        </View>
                        <View style={styles.separatorContainer} />

                        <FlatList
                            data={data2019}
                            keyExtractor={item => item.key}
                            renderItem={({ item }) => {
                                return (
                                    <>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 5 }}>
                                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#1e213d' }}> {item.nome} </Text>
                                            <Text style={{ textAlign: 'left', color: '#1e213d' }}>{item.faltas}</Text>
                                        </View>

                                    </>
                                );
                            }}

                        />

                        <View style={styles.separatorContainer} />
                        <Text style={styles.Textcard}>
                            Os vereadores Maria Aparecida Gama (Cida Gama) e Justiniano Felix (Tiano)
                            apenas participaram de uma sessão no ano de 2018, sessão realizada no dia 20/03/2018.
                        </Text>
                        <View style={styles.separatorContainer} />
                        <Text style={styles.Textcard}>
                            Os vereadores Anderson da Cruz (Iluminação) e Maria Aparecida Gama (Cida Gama)
                            não têm presença em nenhuma sessão realizada na câmara de vereadores no ano de 2017.
                        </Text>
                        <View style={styles.separatorContainer} />
                        <Text style={styles.Textcard}>
                            A vereadora cida gama não tem nenhuma presença no ano de 2019
                        </Text>
                    </Card>

                    <Text style={styles.ibge} >Fonte: Tribunal de Contas dos Municípios do Estado da Bahia</Text>


                </View>
            </ScrollView>
        </SafeAreaView>
    )


}
export default Tab3;