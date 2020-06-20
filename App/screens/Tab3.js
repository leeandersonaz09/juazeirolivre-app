import React, { Component, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card'

const Tab3 = () => {

    const [dataEducacao, setDataEducacao] = useState([
        { key: '1', ano: '2009', valor: 'R$ 38.443.291,41' },
        { key: '2', ano: '2010', valor: 'R$ 67.171.693,99' },
        { key: '3', ano: '2011', valor: 'R$ 76.498.189,07' },
        { key: '4', ano: '2012', valor: 'R$ 93.743.320,58' },
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
                <View style={styles.contentContainer}>
                    
                    <Card>

                        <Text style={styles.Tittle}>Orçamentos da Educação</Text>
                    
                        <View style={styles.boxTextContainer}>

                            <Text style={styles.boxText1}>Ano</Text>
                            <Text style={styles.boxText2}>Valor do Orçamento</Text>

                        </View>

                    </Card>

                    <FlatList
                        data={dataEducacao}
                        keyExtractor={item => item.key}
                        renderItem={({ item }) => {
                            return (
                                <>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft:5}}>
                                        <Text style={{ fontSize: 12, fontWeight: 'bold' }}> {item.ano} </Text>
                                        <Text style={{ textAlign:'left'}}>{item.valor}</Text>
                                    </View>

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

    },

    boxTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },

    boxText1: {

        fontWeight: 'bold'

    },

    boxText2: {


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