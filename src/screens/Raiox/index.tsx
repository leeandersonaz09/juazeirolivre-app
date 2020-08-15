import React, { useState } from 'react';
import {
    View,
    ScrollView,
    ImageBackground,

} from 'react-native';

import { Left } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import { metrics } from '../../styles'
import { Header, Card, Text, SwitchButton, View as MyView } from '../../components';
import { ThemeContext } from '../../config/ThemeContext';
import styles from './styles';

const raiox = () => {

    const { toggleTheme } = React.useContext(ThemeContext);

    const [data, setData] = useState([
        { key: '1', text: 'Apenas 17,2% da população trabalha com carteira assinada.' },
        { key: '2', text: 'O salário médio mensal desses trabalhadores é de 2.1 salários mínimos.' },
        { key: '3', text: '41,7% da população recebe até meio salário mínimo.' },
        { key: '4', tittle: 'Crise Econômica em Juazeiro no ano de 2020.', text: 'De acordo com a CDL, 30% das empresas encerraram ou encerrarão suas atividades, aproximadamente 9.000 demissões e 40% das empresas de microempreendedor individual, encerraram suas operações, 2.400 trabalhadores prejudicados.' },
    ]);

    return (
        <MyView style={styles.container}>
            <Header>
                <View style={{ flexDirection: 'row', marginTop: 5}}>
                    <View style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center', marginLeft: (metrics.screenWidth * 0.60) / 2 }}>
                        <Text style={styles.headerTitle}>Raio-X da Cidade</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 5, alignSelf: 'flex-end', marginRight: 15, flex: 1 }}>
                        <Left />
                        <SwitchButton onPress={() => { toggleTheme() }} />
                    </View>
                </View>

            </Header>
            <ScrollView>
                <ImageBackground
                    source={require('../../img/carteira_de_trabalho.jpeg')}
                    style={styles.backgrounImage}
                    imageStyle={{ borderBottomRightRadius: 65 }}
                >
                    <View style={styles.darkOverlay}></View>
                    <View style={styles.imageContainer}>
                        <Text style={styles.UserGreat}>Trabalho e Rendimento</Text>
                        <Text style={styles.userText}>Segundo o IBGE</Text>
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
                                        {item.tittle ? (<Text style={styles.Tittle}> {item.tittle} </Text>) : null}
                                        <Text style={styles.Text}> {item.text} </Text>
                                    </Card>

                                </>
                            );
                        }}

                    />

                    <Text style={styles.ibge}>Fonte: Instituto Brasileiro de Geografia e Estatística - IBGE</Text>
                </View>
            </ScrollView>
        </MyView>
    )


}
export default raiox;