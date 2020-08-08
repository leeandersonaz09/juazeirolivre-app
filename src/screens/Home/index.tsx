import React, { useState, useEffect } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Share,
    TextInput,
    AsyncStorage
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Card, Title } from 'react-native-paper';
import { Content, CardItem, Thumbnail, Button, Text, Icon, Left, Body } from 'native-base';
import * as firebase from 'firebase';
import { StackParamList } from '../../config/navigation';
import { StackNavigationProp } from '@react-navigation/stack';

import { Header, Shimmer, SwitchButton } from '../../components';
import LoadingComponent from '../../components/defaultLoading/lottieLoading';
import Loading from '../../loaders/13255-loader.json';
import { colors, metrics } from '../../styles';
import styles from './styles';

const MY_STORAGE_KEY = 'isDarkTheme';

interface RenderListProps {
    by: string;
    data: string;
    img: string;
    ref: string;
    text: string;
    tittle: string;
    id: number;
    avatar: number;
    like: boolean;
}

type Props = {
    navigation: StackNavigationProp<StackParamList, 'Details'>;
}

const Home: React.FC<Props> = ({ navigation }) => {

    const dataRef = firebase.firestore().collection('post');
    const [data, setData] = useState([]);
    const [query, setQuery] = useState(null);
    const [barIcon, setbarIcon] = useState('https://img.icons8.com/ios/100/000000/search--v1.png');
    const [dataBackup, setdataBackup] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageSize, setpageSize] = useState(3);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        // Retrieves from storage as boolean
     AsyncStorage.getItem(MY_STORAGE_KEY, (err, value) => {
        if (err) {
          console.log(err)
        } else {
          const result = JSON.parse(value) // boolean false
          //console.log('STORAGE KEY VALUE' + result)
            setIsDarkTheme(result);
        }
    })
        
        const subscriber = getData();
        // Unsubscribe from events when no longer in use
        return () => subscriber;


    }, []);


    const getData = async () => {
        setLoading(true);

        await dataRef.orderBy('data', 'desc').limit(pageSize)
            .onSnapshot(querySnapshot => {

                const list = [];
                querySnapshot.forEach(doc => {

                    const { by, data, img, ref, text, tittle, avatar, like } = doc.data();
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

                setdataBackup(list);
                setData(list);
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            });
    }

    const loadMore = () => {
        var items = pageSize + 5;
        setpageSize(items);
    }

    const LoadingAnimation = () => {
        return (
            <View style={styles.container}>
                <Card style={{ borderWidth: 0.1, borderColor: colors.gray, marginBottom: 10 }}></Card>
                <View style={styles.header2}>
                    <View style={styles.avatar}>
                        <Shimmer width={60} height={60} />
                    </View>
                    <View>
                        <View style={styles.upperText}>
                            <Shimmer width={200} height={14} />
                        </View>
                        <View style={styles.lowerText}>
                            <Shimmer width={120} height={14} />
                        </View>
                    </View>
                </View>
                <Shimmer width={metrics.screenWidth} height={140} />
                <View style={styles.textLine}>
                    <Shimmer width={'100%'} height={14} />
                </View>
                <View style={styles.textLine}>
                    <Shimmer width={'100%'} height={14} />
                </View>

            </View>
        )

    }

    //SearchBar 
    const filterItem = (event) => {
        var text = event.nativeEvent.text

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
                url: "https://play.google.com/store/apps/details?id=com.juazeirolivre.juazeirolivreapp&hl=pt_BR"
            });

            if (result.action === Share.sharedAction) {

            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }

    };

    const switchTheme = async () => {
        
         if (isDarkTheme == true) {
         // Saves to storage as a JSON-string
         await AsyncStorage.setItem(MY_STORAGE_KEY, JSON.stringify(false))
         .then(() => {
             setIsDarkTheme(false);
         });
        } else {
            // Saves to storage as a JSON-string
         await AsyncStorage.setItem(MY_STORAGE_KEY, JSON.stringify(true))
         .then(() => {
             setIsDarkTheme(true);
         });
        }
    }

    const renderList = ({ by, data, img, ref, text, tittle, id, avatar, like }: RenderListProps) => {
        return (
            <>
                <TouchableOpacity activeOpacity={0.8} onPress={() => {
                    navigation.navigate('Details', {
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
                    <Card style={{ borderWidth: 1, borderColor: colors.gray, marginBottom: 10 }}>

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
                                <Text numberOfLines={5} style={styles.Text}>{text}</Text>
                                <Text style={{ fontStyle: 'italic', color: "#808080", textAlign: 'center', marginTop: 10 }}>
                                    {ref}
                                </Text>

                            </Body>

                        </Card.Content>
                        <CardItem>
                            <Left>
                                <Button onPress={() => shareContent()} transparent textStyle={{ color: '#87838B' }}>
                                    <Icon name="md-share" />
                                    <Text>Compartilhar</Text>
                                </Button>
                            </Left>
                        </CardItem>

                    </Card>

                </TouchableOpacity>

            </>
        )
    }

    return (
        <SafeAreaView style={styles.container}>

            <Header>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <View style={{alignContent:'center', justifyContent:'center', alignItems:'center', marginLeft: (metrics.screenWidth *0.65) / 2}}>
                        <Text style={styles.headerTitle}>Juazeiro Livre</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 5, alignSelf:'flex-end', marginRight:15, flex:1  }}>
                        <Left/>
                        <SwitchButton onPress={() => switchTheme() }/>
                    </View></View>
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
                    source={require('../../../assets/home-img.png')}
                />
                <View style={styles.contentContainer}><Text style={[styles.Tittle, { textAlign: 'center', marginHorizontal: 5, marginTop: -20 }]}>Bem-vindo! Essa é a ferramenta de fiscalização e transparência do povo de Juazeiro.</Text>
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
