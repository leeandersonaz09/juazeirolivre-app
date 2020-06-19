import React, { Component, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    Linking
} from 'react-native';
import { Container, Header, Content, Tab, Tabs, Body, Title, Icon, Right, Button, Accordion, Card, CardItem } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';

const dataArray = [
    { id: '1', title: "Atas do ano de 2017", url: "https://0201.nccdn.net/1_2/000/000/144/700/ATAS-DAS-SESS--ES---2017.zip", content: 'Faça aqui o download das atas do ano de 2017'  },
    { id: '2', title: "Atas do ano de 2018", url: "https://0201.nccdn.net/1_2/000/000/12a/33b/ATAS-DAS-SESS--ES---2018.zip", content: 'Faça aqui o download das atas do ano de 2018' },
    { id: '3', title: "Atas do ano de 2019", url: "https://0201.nccdn.net/1_2/000/000/168/baa/ATAS-DAS-SESS--ES---2019.zip", content: 'Faça aqui o download das atas do ano de 2019'  }
];

const download = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Container>
                <Header>
                    <Body>
                        <Title>Downloads</Title>
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

                    <Content padder>

                        <Text style={styles.Tittle}>Atas das sessões realizadas na Câmara Municipal de Juazeiro-BA</Text>
                        <Text style={{ alignSelf: 'center', fontSize: 12, paddingBottom: 15 }}>Atas das sessões realizadas na Câmara Municipal de Juazeiro-BA</Text>
                        <FlatList
                            data={dataArray}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <>
                                        <Card>
                                            <CardItem header bordered>
                                                <Text style={{fontWeight:'bold'}}>{item.title}</Text>
                                            </CardItem>
                                            <CardItem bordered>
                                                <Body>
                                                    <Text>{item.content}</Text>
                                                </Body>
                                            </CardItem>
                                            <CardItem footer bordered>
                                                <Text onPress={()=> Linking.openURL(item.url)} style={{fontWeight:'bold', color:'#ff0066'}}>Baixar</Text>
                                            </CardItem>
                                        </Card>

                                    </>
                                );
                            }}
                        />

                    </Content>

                </ScrollView>
            </Container>
        </SafeAreaView>
    )


}
export default download;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#ffff",
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
        textAlign: 'center'
    },

    ibge: {
        fontStyle: 'italic',
        fontSize: 10,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10
    },



})