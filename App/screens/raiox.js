import React, { Component, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { Container, Content, Tab, Tabs, Body, Title, Icon, Right, Button } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import Header from '../components/Header';
import Card from '../components/Card';

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
            <Container>
                <ScrollView>
                    <View style={styles.contentContainer}>

                            <Text style={styles.Tittle}>Trabalho e rendimento segundo o IBGE</Text>

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

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#ffff",
    },

    contentContainer: {
        padding: 15,

    },

    headerTitle: {
        fontSize: 20,
        fontWeight: "500",
        color: "#fff",
        fontWeight: "bold",
    },


    boxContainer: {
        alignContent: 'center',
        alignItems: "center",
        textAlign: 'justify'

    },

    boxTextContainer: {
        flexDirection: 'row',

    },

    boxText1: {
        paddingRight: 50,
        paddingLeft: "15%",
        backgroundColor: '#d8d8d8',
        borderWidth: 1,
        fontWeight: 'bold'

    },

    boxText2: {
        paddingRight: 50,
        paddingLeft: 50,
        borderWidth: 1

    },

    Tittle: {
        fontSize: 20,
        marginBottom:15,
        fontWeight: 'bold',
        alignSelf: 'center',
    },

    ibge: {
        fontStyle: 'italic',
        fontSize: 10,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10
    },



})