/* Core */
import React, { Component, useState, useEffect } from 'react';
import {View,Image} from 'react-native';
//import Card from '../components/Card'
import { Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const Post = ({ data: { by, data, img, ref, text, tittle, id, avatar } }) => (

  <View style={styles.container}>
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

  </View>
);

export default Post;