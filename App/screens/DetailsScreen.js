import React, { Component, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  StatusBar,
  Share,
  Dimensions
} from 'react-native';
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;
//import Header from '../components/Header';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';


function DetailsScreen({ route, navigation }) {

  /* 2. Get the param */
  const { id } = route.params;
  const { tittle } = route.params;
  const { text } = route.params;
  const { ref } = route.params;
  const { img } = route.params;
  const { avatar } = route.params;
  const { by } = route.params;
  const { data } = route.params;

  const backHome=()=> {
    navigation.navigate('Home');
  }

  const shareContent = async () => {
    try {
        const result = await Share.share({
            message: text + img,
            title: tittle,
            url: img
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
    <Container style={styles.container}>
      <Header>
      <StatusBar barStyle="light-content" backgroundColor="#3f51b5" />
      <Left>
            <Button transparent onPress={backHome}>
              <Icon name='arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
          <Text style={styles.headerTitle}>Juazeiro Livre</Text>
          </Body>
       
      </Header>
      <ScrollView>
        <Content>

          <CardItem>
            <Left>
              <Thumbnail source={{ uri: avatar }} />
              <Body>
                <Text>{by}</Text>
                <Text note>{data}</Text>
              </Body>
            </Left>
          </CardItem>
          <Text style={{ fontWeight: 'bold', marginBottom: 10, textAlign: 'center', fontSize: 20 }}>{tittle}</Text>
          <CardItem cardBody>
            <Image resizeMode={'cover'} source={{ uri: img }} style={styles.Img} />
          </CardItem>

          <Body>
            <Text style={styles.Text}>{text}</Text>
            <Text style={styles.Ref}>
              "{ref}"
              </Text>
            <CardItem>
            <Left>
              <Button onPress={() => shareContent()} transparent textStyle={{ color: '#87838B' }}>
                <Icon name="md-share" />
                <Text>Compartilhar</Text>
              </Button>
            </Left>
            </CardItem>
          </Body>


        </Content>

      </ScrollView>

    </Container>
  );
}


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
  Img: {
    height: imageHeight, 
    width: imageWidth
  },
  avatarImage: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: '#3490dc',
    borderRadius: 150
  },
  Text: {
    textAlign: 'justify',
    alignContent:'center',
    marginTop:10,
    marginBottom:15,
    marginHorizontal:10,
    fontSize: 18,

  },
  Ref: {
    fontStyle: 'italic',
    color: "#808080",
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal:10,
    marginBottom: 10
  }
});

export default DetailsScreen;