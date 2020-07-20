import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  StatusBar,
  Share,
  TouchableOpacity
} from 'react-native';
import { Container, Header, Content, CardItem, Thumbnail, Text, Button, Icon, Left, Body} from 'native-base';
import ImageView from "react-native-image-viewing";
//Dimensins get
import styles from './styles';
import { colors } from '../../styles';
//import Header from '../components/Header';

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
  const [visible, setIsVisible] = useState(false);

  const images = [
    {
      uri: img,

    },
  ];

  const backHome = () => {
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
      <Container>
        <Header >
          <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
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
          <Text style={styles.tittle}>{tittle}</Text>
          <ImageView
            images={images}
            imageIndex={0}
            visible={visible}
            animationType="fade"
            onRequestClose={() => setIsVisible(false)}
          />
          <View>
            <TouchableOpacity onPress={() => { setIsVisible(true) }} >
              <Image resizeMode="contain" source={{ uri: img }} style={styles.Img} />
            </TouchableOpacity>
          </View>
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
      </Container>
    </SafeAreaView>
  );
}

export default DetailsScreen;