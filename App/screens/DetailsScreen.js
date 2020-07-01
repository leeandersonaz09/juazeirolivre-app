import React, { Component, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  StatusBar
} from 'react-native';
import Header from '../components/Header';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
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

  async function clickEventListener() {

  }

  return (
    <Container style={styles.container}>

      <Header>
        <Text style={styles.headerTitle}>Juazeiro Livre</Text>
      </Header>
      <ScrollView>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: avatar }} />
                <Body>
                  <Text>{by}</Text>
                  <Text note>{data}</Text>
                </Body>
              </Left>
            </CardItem>
            <Text style={{ fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>{tittle}</Text>
            <CardItem cardBody>
              <Image source={{ uri: img }} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>

            <Body>
              <Text style={styles.Text}>{text}</Text>
              <Text style={{ fontStyle: 'italic', color: "#808080", textAlign: 'center', marginTop: 10 }}>
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

          </Card>
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
    width: '100%',
    height: 400
  },
  avatarImage: {
    width: 120,
    height: 120,
    borderWidth: 2,
    borderColor: '#3490dc',
    borderRadius: 150
},
});

export default DetailsScreen;