import React, { Component, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { Container, Header, Content, Tab, Tabs, Body, Title, Icon, Right, Button } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';

const raiox = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Container>
                <Header>
                    <Body>
                        <Title>Emprego e Renda</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='logo-facebook' onPress={()=> Linking.openURL("https://web.facebook.com/cleberjesus31")} />
                        </Button>
                        <Button transparent>
                            <Icon name='more' />
                        </Button>
                    </Right>
                </Header>
                <ScrollView>
                    <View style={styles.contentContainer}>


                        <Text style={styles.Tittle}>Trabalho e rendimento segundo o IBGE</Text>
                        <View style={styles.boxContainer}>

                            <Text>Apenas 17,2% da população trabalha com carteira assinada</Text>
                            <Text>O salário médio mensal desses trabalhadores é de 2.1 salários mínimos</Text>
                            <Text>41,7% da população recebe até meio salário mínimo </Text>


                        </View>

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
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 10,
    },

    ibge: {
        fontStyle: 'italic',
        fontSize: 10,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10
    },



})