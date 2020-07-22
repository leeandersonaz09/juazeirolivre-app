import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    ImageBackground,

} from 'react-native';
import { Container} from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import Card from '../../components/Card';
import styles from './styles';

const raiox = () => {

    const [data, setData] = useState([
        { key: '1', text: 'Apenas 17,2% da população trabalha com carteira assinada.'},
        { key: '2', text: 'O salário médio mensal desses trabalhadores é de 2.1 salários mínimos.'},
        { key: '3', text: '41,7% da população recebe até meio salário mínimo.'},
    ]);

    return (
        <SafeAreaView style={styles.container}>
            <Header>
                <Text style={styles.headerTitle}>Raio-X da Cidade</Text>
            </Header>
            <ImageBackground 
                source={require('../../img/carteira_de_trabalho.jpeg')}
                style={styles.backgrounImage}
                imageStyle={{borderBottomRightRadius:65}}
            >
                <View style={styles.darkOverlay}></View>
                <View style={styles.imageContainer}>
                    <Text style={styles.UserGreat}>Trabalho e Rendimento</Text>
                    <Text style={styles.userText}>Segundo o IBGE</Text>
                </View>

            </ImageBackground>
            <Container>
                <ScrollView>
                    <View style={styles.contentContainer}>

                        <FlatList
                            data={data}
                            keyExtractor={item => item.key}
                            renderItem={({ item }) => {
                                return (
                                    <>
                                        <Card>
                                            <Text style={{ fontSize: 15, }}> {item.text} </Text>
                                        </Card>

                                    </>
                                );
                            }}

                        />

                        <Text style={styles.ibge}>Fonte: Instituto Brasileiro de Geografia e Estatística - IBGE</Text>
                    </View>
                </ScrollView>
            </Container>
        </SafeAreaView>
    )


}
export default raiox;