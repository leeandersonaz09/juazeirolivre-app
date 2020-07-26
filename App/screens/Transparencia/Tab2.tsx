import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    ScrollView
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../../components/Card';
import Separator from '../../components/Separator';

import styles from './styles';

const Tab2 = () => {

    const [dataEducacao, setDataEducacao] = useState([
        { key: '1', ano: '2009', valor: 'R$   38.443.291,41' },
        { key: '2', ano: '2010', valor: 'R$   67.171.693,99' },
        { key: '3', ano: '2011', valor: 'R$   76.498.189,07' },
        { key: '4', ano: '2012', valor: 'R$   93.743.320,58' },
        { key: '5', ano: '2013', valor: 'R$ 102.988.317,18' },
        { key: '6', ano: '2014', valor: 'R$ 109.747.808,96' },
        { key: '7', ano: '2015', valor: 'R$ 120.515.678,94' },
        { key: '8', ano: '2016', valor: 'R$ 132.793.569,09' },
        { key: '9', ano: '2017', valor: 'R$ 135.095.422,60' },
        { key: '10', ano: '2018', valor: 'R$ 153.930.652,41' },
        { key: '11', ano: '2019', valor: 'R$ 167.146.283,84' },

    ]);

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>
                <ImageBackground
                    source={require('../../img/digits-4014181_960_720.webp')}
                    style={styles.backgrounImage}
                    imageStyle={{ borderBottomRightRadius: 65 }}
                >
                    <View style={styles.darkOverlay}></View>
                    <View style={styles.imageContainer}>
                        <Text style={styles.UserGreat}>Educação Municipal em Números</Text>
                        <Text style={styles.userText}>Segundo o IBGE</Text>
                    </View>

                </ImageBackground>
                <View style={styles.contentContainer}>
                    <Card>
                        <Text style={styles.Tittle}>APANHADO GERAL</Text>
                        <Text>• 62 escolas na zona urbana.</Text>
                        <Text>• 72 escolas na zona rural.</Text>
                        <Text>• 34.437 alunos matriculados em 2018.</Text>
                        <Text style={styles.ibge}>Fonte: Portal da Educação/Rede Municipal de Juazeiro.</Text>
                        <Separator />
                        <Text style={styles.normalText}>• 35.385 alunos matriculados no Ensino Fundamental em 2018.</Text>
                        <Text style={styles.normalText}>• 11.491 alunos matriculados no Ensino Médio em 2018.</Text>
                        <Text style={styles.normalText}>• 1.604 professores do Ensino Fundamental em 2018.</Text>
                        <Text style={styles.normalText}>• 796 professores do Ensino Médio em 2018.</Text>
                        <Text style={styles.ibge}>Fonte: Instituto Brasileiro de Geografia e Estatística - IBGE</Text>

                    </Card>
                    <Card>
                        <Text style={styles.Tittle}>CADÊ O DINHEIRO?</Text>

                        <Text style={styles.normalText}>No período de fevereiro a junho de 2019, a secretaria de educação recebeu um total de R$ 63.634.862,41.</Text>
                        <Separator />
                        <Text style={styles.normalText}>No período de fevereiro a junho de 2020, a secretaria de educação recebeu um total de R$ 65.298.750,27.</Text>
                        <Separator />
                        <Text style={styles.normalText}>Em 2020 recebeu R$ 1.663.887,86 a mais do que em 2019.</Text>
                        <Text style={styles.ibge} >Fonte: Tribunal de Contas dos Municípios do Estado da Bahia.</Text>
                    </Card>
                    <Card>

                        <Text style={styles.Tittle}>Entre 2009 e 2019 a cidade de Juazeiro recebeu, apenas para educação, R$1.198.074.228,07.</Text>
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
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#1e213d' }}> {item.ano} </Text>
                                            <Text style={{ textAlign: 'left', color: '#1e213d' }}>{item.valor}</Text>
                                        </View>

                                    </>
                                );
                            }}

                        />
                    </Card>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 15 }}>ORÇAMENTO APROVADO PARA 2020: R$ 188.220.380,00</Text>
                    <Text style={styles.ibge} >Fonte: Tribunal de Contas dos Municípios do Estado da Bahia</Text>


                </View>

            </ScrollView>
        </SafeAreaView >
    )


}
export default Tab2;