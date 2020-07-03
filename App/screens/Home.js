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
    TextInput,
    ActivityIndicator,
    RefreshControl,
    Dimensions
} from 'react-native';
//import Card from '../components/Card'
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { Content, CardItem, Thumbnail, Button, Text, Icon, Left, Right, Body, Container } from 'native-base';
import Header from '../components/Header';
import * as firebase from 'firebase';
import { FlatList } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get('window')
import LoadingComponent from '../components/defaultLoading/lottieLoading';
import Loading from '../loaders/13255-loader.json';
import { set } from 'react-native-reanimated';

const Home = ({ navigation }) => {

    const dataRef = firebase.firestore().collection('post');
    let onEndReachedCalledDuringMomentum = false;
    const [data, setData] = useState([]);
    const [query, setQuery] = useState(null);
    const [barIcon, setbarIcon] = useState('https://img.icons8.com/ios/100/000000/search--v1.png');
    const [dataBackup, setdataBackup] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageSize, setpageSize] = useState(5);
    const [liked, setLiked] = useState(false);

    useEffect(() => {

        const subscriber = getData();
        // Unsubscribe from events when no longer in use
        return () => subscriber;


    }, []);

    //Old Load componet
    /*
    if (!loading) {
         return <View style={styles.loading}><ActivityIndicator size='large' /></View>
    }
    */
    const getData = async () => {
        setLoading(true);
        await dataRef.orderBy('data', 'desc').limit(pageSize)
            .onSnapshot(querySnapshot => {

                const list = [];
                querySnapshot.forEach(doc => {
                    console.log(list)
                    const { by, data, img, ref, text, tittle, avatar,like } = doc.data();
                    list.push({
                        id: doc.id,
                        by,
                        img,
                        data,
                        ref,
                        text,
                        tittle,
                        avatar,
                        like
                    });
                });
                console.log('data obj' + list)
                setdataBackup(list);
                setData(list);
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            });



    }

    const giveLike =async(id, like)=>{
    
        liked ? setLiked(false) : setLiked(true);
        var sum = liked ? like - 1 : like + 1;
        
        await firebase.firestore().collection('post').doc(id).update({
            like: sum,
        })
        .then(ref => {
            console.log(ref);
        })
        .catch(error => {
            console.log(error);
        });
    }

    const loadMore = () => {
        var items = pageSize + 5;
        setpageSize(items);
    }

    const LoadingAnimation = () => {
        return <LoadingComponent data={Loading} />;
    }
    //SearchBar working 
    const filterItem = (event) => {
        var text = event.nativeEvent.text
        console.log(text);
    
        if (text == '') {
            setbarIcon('https://img.icons8.com/ios/100/000000/search--v1.png');
        } else {
            setbarIcon('https://img.icons8.com/ios/50/000000/left.png');
        }

        setQuery(text);

        const newData = dataBackup.filter(item => {
            const itemData = `${item.data.toUpperCase()} ${item.tittle.toUpperCase()} ${item.text.toUpperCase()}`;
            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });

        setData(newData);
     
    };

    const searchIconBack = () => {

        if (barIcon == 'https://img.icons8.com/ios/50/000000/left.png') {
            setbarIcon('https://img.icons8.com/ios/100/000000/search--v1.png')
            setQuery(null)
            getData();
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
                console.log('sucesso')
            } else if (result.action === Share.dismissedAction) {
                // dismissed
                alert("Ocorreu um erro!")
            }
        } catch (error) {
            alert(error.message);
        }
    };

    const renderList = ({ by, data, img, ref, text, tittle, id, avatar, like }) => {
        return (
            <>
                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                    navigation.navigate('ProductDetails', {
                        id: id,
                        tittle: tittle,
                        ref: ref,
                        img: img,
                        text: text,
                        data: data,
                        avatar: avatar,
                        by: by
                    })
                }}>
                    <Card style={{ borderWidth: 1, borderColor: "#d8d8d8", marginBottom: 10 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: avatar }} />
                                <Body>
                                    <Text>{by}</Text>
                                    <Text note>{data}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <Card.Cover source={{ uri: img }} />
                        <Card.Content>


                            <Title>{tittle}</Title>

                            <Body>
                                <Text style={styles.Text}>{text}</Text>
                                <Text style={{ fontStyle: 'italic', color: "#808080", textAlign: 'center', marginTop: 10 }}>
                                    {ref}
                                </Text>

                            </Body>

                        </Card.Content>
                        <CardItem>
                            <Left>
                                <Button transparent  onPress={() => giveLike(id, like)}>
                                    <Icon active name="thumbs-up" style={{fontSize: 28}}/>
                                    <Text>{ like ? like : '0' }</Text>
                                </Button>
                            </Left>
                            <Right>
                                <Button onPress={() => shareContent()} transparent textStyle={{ color: '#87838B' }}>
                                    <Icon name="md-share" />
                                    <Text>Compartilhar</Text>
                                </Button>
                            </Right>
                        </CardItem>

                    </Card>

                </TouchableOpacity>

            </>
        )
    }

    return (
        <SafeAreaView style={styles.container}>

            <Header>
                <Text style={styles.headerTitle}>Juazeiro Livre</Text>
            </Header>
            <Content>
                <View style={styles.header}>
                    <View style={styles.SectionStyle}>
                        <TouchableOpacity onPress={() => searchIconBack()}>
                            <Image
                                //We are showing the Image from online
                                source={{ uri: barIcon }}
                                //Image Style
                                style={styles.ImageStyle}
                            />
                        </TouchableOpacity>
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="O que procura..."
                            placeholderTextColor="gray"
                            value={query}
                            onChange={(value) => { 
                                filterItem(value);
                                //filterItem(event.target.value);
                            }}
                            style={styles.input}
                        />
                    </View>
                </View>
                <Image
                    style={styles.headerImage}
                    source={require('../../assets/home-img.png')}
                />
                <View style={styles.contentContainer}><Text style={styles.Tittle}>Postagens Recentes</Text>
                    <View style={styles.cardContainer}>
                        {loading ? LoadingAnimation() :
                            (<FlatList
                                data={data}
                                keyExtractor={item => String(item.id)}
                                renderItem={({ item }) => data ? renderList(item) : <Text style={{ alignSelf: 'center', justifyContent: 'center' }}>Não há novas postagens</Text>}
                                onEndReached={() => loadMore()}
                                onEndReachedThreshold={0.1}
                                ListFooterComponent={loading && <LoadingComponent data={Loading} />}
                            />)
                        }
                    </View>
                </View>
            </Content>
        </SafeAreaView>
    )


}

export default Home;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "500",
        color: "#fff",
        fontWeight: "bold",
    },

    header: {
        height: 60,
        width: '100%',
        backgroundColor: '#3f51b5',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        shadowOffset: {width:1, height:1},
        shadowColor:'#333',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation:1
    },

    input: {
        height: 40,
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 5,
        paddingLeft: 10,
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 40,
        borderRadius: 20,
        margin: 10,
    },

    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },

    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerImage: {
        width: "100%",
        height: 300,
    },

    contentContainer: {
        position: 'relative',
        left: 0, top: -50,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        paddingTop: 40,
        backgroundColor: '#fff'


    },
    cardContainer: {
        marginTop: 15,

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
        fontSize: 20
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