import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    Linking,
    ImageBackground,
} from 'react-native';
import { Container, Content, Card, CardItem, Body } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import Header from '../../components/Header';

const dataArray = [
    { id: '1', title: "Atas do ano de 2017", url: "https://0201.nccdn.net/1_2/000/000/144/700/ATAS-DAS-SESS--ES---2017.zip", content: 'Faça aqui o download das atas do ano de 2017' },
    { id: '2', title: "Atas do ano de 2018", url: "https://0201.nccdn.net/1_2/000/000/12a/33b/ATAS-DAS-SESS--ES---2018.zip", content: 'Faça aqui o download das atas do ano de 2018' },
    { id: '3', title: "Atas do ano de 2019", url: "https://0201.nccdn.net/1_2/000/000/168/baa/ATAS-DAS-SESS--ES---2019.zip", content: 'Faça aqui o download das atas do ano de 2019' }
];

const download = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Container>
                <Header>
                    <Text style={styles.headerTitle}>Downloads</Text>
                </Header>
                <ScrollView>
                <ImageBackground 
                source={require('../../img/Camara.jpg')}
                style={styles.backgrounImage}
                imageStyle={{borderBottomRightRadius:65}}
            >
                <View style={styles.darkOverlay}></View>
                <View style={styles.imageContainer}>
                    <Text style={styles.UserGreat}>Atas das sessões realizadas</Text>
                    <Text style={styles.userText}>Câmara Municipal de Juazeiro-BA</Text>
                </View>

            </ImageBackground>
                    <Content padder>
 
                        <FlatList
                            data={dataArray}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <>
                                        <Card>
                                            <CardItem header bordered>
                                                <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                                            </CardItem>
                                            <CardItem bordered>
                                                <Body>
                                                    <Text>{item.content}</Text>
                                                </Body>
                                            </CardItem>
                                            <CardItem footer bordered>
                                                <Text onPress={() => Linking.openURL(item.url)} style={{ fontWeight: 'bold', color: '#ff0066' }}>Baixar</Text>
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
    backgrounImage:{
        width:'100%',
        height:270,
        
    },
    darkOverlay: {
        position:'absolute',
        top:0,
        right: 0,
        left:0,
        height:270,
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
    headerTitle: {
        fontSize: 20,
        fontWeight: "500",
        color: "#fff",
        fontWeight: "bold",
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