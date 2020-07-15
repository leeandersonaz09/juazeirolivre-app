import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,

    SafeAreaView,
    ImageBackground,
    ScrollView
} from 'react-native';
import { DataTable } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../../components/Card';

const Tab2 = () => {


    const [data, setData] = useState([
        { key: '1', profissionais: 'Professores', quantidade: '1005' },
        { key: '2', profissionais: 'Coordenadores', quantidade: '46' },
        { key: '3', profissionais: 'Auxiliar Educação / Técnico', quantidade: '216' },
        { key: '4', profissionais: 'Merendeiras', quantidade: '200'},
        { key: '5', profissionais: 'Serviços Gerais', quantidade: '215' },
        { key: '6', profissionais: 'Auxiliar Administrativo / Técnico', quantidade: '178' },
        { key: '7', profissionais: 'Nutricionista', quantidade: '02' },
        { key: '8', profissionais: 'Vigilante', quantidade: '96' },
        { key: '9', profissionais: 'Motorista', quantidade: '25' },
        { key: '10', profissionais: 'Pedreiro', quantidade: '13' },
        { key: '11', profissionais: 'Servente', quantidade: '14' },
        { key: '12', profissionais: 'Pintor', quantidade: '03' }
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

                        <Text>62 escolas na zona urbana.</Text>
                        <Text>72 escolas na zona rural.</Text>
                        <Text>34.437 alunos matriculados em 2018.</Text>
                        <Text style={styles.ibge}>Fonte: Portal da Educação/Rede Municipal de Juazeiro.</Text>
                        <Text>35.385 alunos matriculados no Ensino Fundamental em 2018.</Text>
                        <Text>11.491 alunos matriculados no Ensino Médio em 2018.</Text>
                        <Text>1.604 professores do Ensino Fundamental em 2018.</Text>
                        <Text>796 professores do Ensino Médio em 2018.</Text>
                        <Text style={styles.ibge}>Fonte: Instituto Brasileiro de Geografia e Estatística - IBGE</Text>

                    </Card>
                    <Card>
                        <Text style={styles.Tittle}>Funcionários Contratados da Educação</Text>

         


                        <DataTable>
                            <DataTable.Header>

                                <DataTable.Title>Profissionais</DataTable.Title>
                                <DataTable.Title numeric>Quantidade</DataTable.Title>
                            </DataTable.Header>
                            <FlatList
                                data={data}
                                keyExtractor={item => item.key}
                                renderItem={({ item }) => {
                                    return (
                                        <>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ fontSize: 12, fontWeight: 'bold' }}> {item.profissionais} </Text>
                                            <Text style={{ textAlign: 'left' }}>{item.quantidade}</Text>
                                        </View>
                                    </>
                                    );
                                }}

                            />

                        </DataTable>
                        <Text style={styles.ibge} >Fonte: Tribunal de Contas dos Municípios do Estado da Bahia</Text>
                    </Card>
                </View>
            </ScrollView>
        </SafeAreaView >
    )


}
export default Tab2;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#ffff",
    },

    contentContainer: {
        padding: 15,

    },
    backgrounImage:{
        width:'100%',
        height:240,
        
    },
    darkOverlay: {
        position:'absolute',
        top:0,
        right: 0,
        left:0,
        height:240,
        backgroundColor:'#000',
        opacity:0.2,
        borderBottomRightRadius:65
    },
    imageContainer:{
        paddingTop:50,
        paddingLeft:16
    },
    UserGreat:{
        fontSize:38,
        fontWeight:'bold',
        color:'white',
    },
    userText: {
        fontSize:16,
        fontWeight:'normal',
        color:'white',
    },

    header: {
        height: 60,
        width: '100%',
        backgroundColor: '#0000ff',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
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
        marginTop: 15
    },

    ibge: {
        fontStyle: 'italic',
        fontSize: 10,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10
    },



})