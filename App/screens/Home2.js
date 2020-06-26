import React, { Component, useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert,
    SafeAreaView,
    ScrollView,
    Share,
    ActivityIndicator,
    RefreshControl
} from 'react-native';
//import Card from '../components/Card'
import { Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import Header from '../components/Header';
import * as firebase from 'firebase';
import { FlatList } from 'react-native-gesture-handler';

const Home = () => {

    const dataRef = firebase.firestore().collection('post');
    let onEndReachedCalledDuringMomentum = false;
    const [data, setData] = useState([]);
    const [dataBackup, setdataBackup] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [lines, setLines] = useState(3);
    const [loading, setLoading] = useState(true); // Set loading to true on component mount

    

    useEffect(() => {

        const subscriber = dataRef.orderBy('id').startAfter(lastDoc.data().id).limit(10).get()
        .onSnapshot(querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {

                const { by, data, img, ref, text, tittle } = doc.data();
                list.push({
                    id: doc.id,
                    by,
                    img,
                    data,
                    ref,
                    text,
                    tittle
                });
            });

            setdataBackup(list);
            setData(list);
            setLoading(false);
        });

       
         // Unsubscribe from events when no longer in use
        return () => subscriber();
        

    }, []);

    if (loading) {
        return <ActivityIndicator style={{alignContent: 'center', alignItems:'center'}} />;
    }

    function showMoreLine() {

        if (clicked == false) {
            setLines(100);
            setClicked(true)
        } else {
            setLines(3);
            setClicked(false);
        }

    }

    const shareContent = async () => {
        try {
            const result = await Share.share({
                message: `Por uma Juazeiro livre e transparente, compartilhe a causa, divulge com seus amigos e conhecidos, junte-se a luta e tenha acesso a uma prefeitura mais transparente, justa e acessível para todos! http://www.juazeirolivre.com/`,
                title: "Por uma Juazeiro Livre e transparente",
                url: "http://www.juazeirolivre.com/"
            });

            if (result.action === Share.sharedAction) {
                alert("Compartilhado com sucesso")
            } else if (result.action === Share.dismissedAction) {
                // dismissed
                alert("Cancelado ou erro!")
            }
        } catch (error) {
            alert(error.message);
        }
    };

    const renderList = ({ by, data, img, ref, text, tittle }) => {
        return (
            <>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../../assets/avatar.png')} />
                                <Body>
                                    <Text>{by}</Text>
                                    <Text note>{data}</Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <CardItem>
                            <Body>
                                <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>{tittle}</Text>
                                <Image source={{ uri: img }} style={{ height: 200, width: '100%', flex: 1 }} />
                                <Text style={styles.Text}>{text}</Text>
                                <Text style={{ fontStyle: 'italic', color: "#808080", textAlign: 'center', marginTop: 10 }}>
                                    {ref}
                                </Text>
                            </Body>
                        </CardItem>

                        <CardItem>
                            <Left>
                                <Button onPress={() => shareContent()} transparent textStyle={{ color: '#87838B' }}>
                                    <Icon name="md-share" />
                                    <Text>Compartilhar</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
            </>
        )
    }

    return (
        <SafeAreaView style={styles.container}>

            <Header>
                <Text style={styles.headerTitle}>Juazeiro Livre</Text>
            </Header>
            <ScrollView>
                <Image
                    style={styles.headerImage}
                    source={require('../../assets/home-img.png')}
                />
                <View style={styles.contentContainer}><Text style={styles.Tittle}>Postagens Recentes</Text>
                    <View style={styles.cardContainer}>
                        <Content>
                            <FlatList
                                data={data}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({ item }) => renderList(item)}
                                ListFooterComponent={renderFooter}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={isLoading}
                                        onRefresh={onRefresh}
                                    />
                                }
                                initialNumToRender={3}
                                onEndReachedThreshold={0.1}
                                onMomentumScrollBegin={() => { onEndReachedCalledDuringMomentum = false; }}
                                onEndReached={() => {
                                    if (!onEndReachedCalledDuringMomentum && !isMoreLoading) {
                                        getMore();
                                    }
                                }
                                }

                            />
                        </Content>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )


}

export default Home;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#d8d8d8",
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "500",
        color: "#fff",
        fontWeight: "bold",
    },

    headerImage: {
        width: "100%",
        height: 200,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30
    },

    contentContainer: {
        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        paddingTop: 40,
        backgroundColor: '#fff'


    },
    cardContainer: {
        marginTop: 15,
        marginHorizontal: 15,
    },

    avatarImage: {
        width: 120,
        height: 120,
        borderWidth: 2,
        borderColor: '#3490dc',
        borderRadius: 150
    },

    Tittle: {
        fontWeight: "bold",
        marginBottom: 5,
        alignSelf: "center",
        color: '#3b49b6',
        fontSize:20
    },


    subTittle: {
        fontWeight: 'bold',
        fontStyle: "italic",
        textAlign: "justify",
        marginTop: 10

    },

    Text: {
        marginTop: 5,
        textAlign: 'justify'
    },


})