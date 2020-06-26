import React, { Component, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
  StatusBar
} from 'react-native';
import Header from '../components/Header';

function DetailsScreen({ route, navigation }) {

  /* 2. Get the param */
  const { id } = route.params;
  const { tittle } = route.params;
  const { text } = route.params;
  const { ref } = route.params;
  const { img } = route.params;

  async function clickEventListener() {

  }

  return (
    <View style={styles.container}>

      <StatusBar barStyle="light-content" backgroundColor="#ff5b77" />

      <Header>
                <Text style={styles.headerTitle}>Juazeiro Livre</Text>
        </Header>

      <ScrollView>
        
        <View style={styles.productContainer}>
          <Image resizeMode="contain" style={styles.productImg} source={{ uri: img }} />
          <Text style={styles.name}>{(tittle)}</Text>
          <Text style={styles.price}>{(ref)}</Text>
          <Text style={styles.description}>{(text)}</Text>
        </View>

        <View style={styles.separator}></View>
        
        <View style={styles.addToCarContainer}>
          <TouchableOpacity style={styles.shareButton} onPress={clickEventListener}>
            <Text style={styles.shareButtonText}>Sair</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: '#ff5b77',
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
  productContainer:{ 
    alignItems: 'center', 
    marginHorizontal: 30,
    marginTop:20,
    alignContent:'space-between'
  },
  productImg: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:5
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: "green",
    fontWeight: 'bold'
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
    color: "#696969",
  },
  separator: {
    height: 2,
    backgroundColor: "#eeeeee",
    marginTop: 20,
    marginHorizontal: 30
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: "#ff5b77",
    marginTop:100
  },
  shareButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  addToCarContainer: {
    marginHorizontal: 30
  }
});

export default DetailsScreen;