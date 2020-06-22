import React, { Component, useState } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert,
    SafeAreaView,
    ScrollView,
    Share,
} from 'react-native';
//import Card from '../components/Card'
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import Header from '../components/Header';
import {FlatList } from 'react-native-gesture-handler';

const Home = () => {
    const [data, setData] = useState([
        { 
            key: '2', 
            user: 'Cléber Souza de Jesus', 
            data: '16 de Junho, 2020',
            avatar:'../../assets/avatar.png', 
            img:'../../assets/home-img.png',
            refer:'Mas, se ergues da justiça a clava forte, Verás que um filho teu não foge à luta,Nem teme, quem te adora, a própria morte.', 
            text:"Desde a infância acompanhei meus pais enquanto eles percorreriam bairros da cidade espalhando a palavra do nosso bom Deus. Lourdes e Martins, fundadores de várias congregações, evangelizadores, dois exemplos que me ensinaram a importância de lutar pela liberdade espiritual do nosso povo, sem esquecer, é claro, das suas necessidades físicas. Por influência deles comecei a desenvolver projetos voltados aos jovens de nossa cidade, a exemplo da associação COMUNIDADE DO ROCK, que tinha como objetivo conscientizar e debater temas pouco abordados na época, tais quais, depressão, uso de drogas, eutanásia, suicídio etc. Outro projeto criado por mim foi o ROCK CONTRA FOME, considerado o maior festival de rock da história da região; dois dias, 14 bandas e quase uma tonelada de alimento recolhido e doado a instituições da região. Esse festival proporcionou o convite para que eu ocupasse uma cadeira como conselheiro cultural na Secretaria de Cultura, representando um movimento até então marginalizado. Escutando o conselho de meus pais, prestei vestibular na UNIVASF, e fui aprovado para a primeira turma do curso de arqueologia, no entanto perdi meu pai antes de receber a notícia da aprovação. Não pude concluir por conta de minha mãe ter adoecido logo depois da morte do meu pai. Para ficar mais próximo dela, decidi fazer Pedagogia na UNEB, universidade na qual, por duas vezes, fui eleito para ser representante dos alunos no colegiado. Também dei suporte a três grupos do Diretório Acadêmico, e fui responsável pela organização e logística que possibilitou 8 viagens da delegação de Juazeiro e Senhor do Bomfim para congressos estudantis de nível estadual, regional e nacional. Atualmente, sou especialista em Educação, Contemporaneidade e novas Tecnologias, pela Univasf. E atuo como professor de Educação Infantil no interior do município e tento sempre me posicionar para além do que um professor comum pode oferecer, no intuito de garantir que as crianças que estão na minha sala tenham o melhor preparo que um professor possa proporcionar, apesar das limitações brutais impostas pelo sistema educacional. Mas, não é o bastante. Tenho dormido e acordado pensando na condição de miséria a qual submeteram o nosso povo. Um grupo está destruindo os sonhos e as chances da nossa gente. O resultado impreterivelmente de tudo isso é a condenação dos nossos jovens que padecem nas mãos da violência, das drogas, da falta de perspectiva que gera depressão e, muitas vezes, o final da história é o suicídio. Nunca houve uma geração tão pobre em Juazeiro. Se o povo não retomar o poder desses bandidos que saqueiam diariamente nossas casas, estaremos fatalmente condenados a um caos irreversível. Cansado de outorgar essa responsabilidade a outros, resolvi montar um projeto que culminará em uma candidatura que será anunciada em tempo conveniente, respeitando a constituição. A construção desse projeto de compromisso mútuo visa levar o povo ao poder de novo para colocar um fim na ciranda maligna que governa nossa cidade através da fiscalização do orçamento público. Nosso projeto se chama JUAZEIRO LIVRE e ele foi criado para defender a nossa cidade.",
        },
        { 
            key: '1', 
            user: 'Cléber Souza de Jesus', 
            data: '16 de Junho, 2020',
            avatar:'../../assets/avatar.png', 
            img:'../../assets/home-img.png',
            refer:'', 
            text:"Novas funcionalidades foram implementadas no aplicativo. Atualize o app para visualiza-las.",
        },
    ]);
    const [clicked, setClicked] = useState(false);
    const [lines, setLines] = useState(3);

     function showMoreLine(){

        if(clicked==false){
            setLines(100);
            setClicked(true)
        }else{
            setLines(3);
            setClicked(false);
        }
    
    }

    const shareContent = async () => {
        try {
          const result = await Share.share({
            message:`Por uma Juazeiro livre e transparente, compartilhe a causa, divulge com seus amigos e conhecidos, junte-se a luta e tenha acesso a uma prefeitura mais transparente, justa e acessível para todos! http://www.juazeirolivre.com/`,
            title:"Por uma Juazeiro Livre e transparente",
            url:"http://www.juazeirolivre.com/"
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

                            <TouchableOpacity onPress={()=> showMoreLine()}> 
                                <FlatList
                                    data={data}
                                    keyExtractor={item => item.key}
                                    renderItem={({ item }) => {
                                        return (
                                            
                                            <>
                                                <Card style={{flex: 0}}>
                                                    <CardItem>
                                                        <Left>
                                                            <Thumbnail source={require('../../assets/avatar.png')} />
                                                            <Body>
                                                                <Text>{item.user}</Text>
                                                                <Text note>{item.data}</Text>
                                                            </Body>
                                                        </Left>
                                                    </CardItem>
                                                    
                                                    <CardItem>
                                                        <Body>
                                                            <Image  source={require('../../assets/home-img.png')} style={{height: 200, width: '100%', flex: 1}}/>
                                                            <Text numberOfLines={lines} ellipsizeMode='tail' style={styles.Text}>{item.text}</Text>
                                                            <Text style={{ fontStyle: 'italic', color: "#808080", textAlign: 'center', marginTop: 10}}>
                                                                {item.refer}
                                                            </Text>
                                                        </Body>
                                                    </CardItem>

                                                    <CardItem>
                                                        <Left>
                                                            <Button onPress={()=>shareContent()} transparent textStyle={{color: '#87838B'}}>
                                                                <Icon name="md-share" />
                                                                <Text>Compartilhar</Text>
                                                            </Button>
                                                        </Left>
                                                    </CardItem>
                                                </Card>

                                            </>
                                        );
                                    }}

                                />           
                        
                            </TouchableOpacity>
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
        backgroundColor: "#ffff",
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
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30
    },

    contentContainer: {
        borderTopStartRadius:40,
        borderTopEndRadius:40,
        shadowOffset: {width:1, height:1},
        shadowColor:'#333',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation:3,
        paddingTop:40, 
          

    },
    cardContainer: {
        marginTop: 15,
        marginHorizontal:15,
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
        alignSelf:"center",
        color: '#3b49b6'
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
    }




})