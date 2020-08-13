import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Share,
  TouchableOpacity
} from 'react-native';
import { Container, Content, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import ImageView from "react-native-image-viewing";
import { useTheme } from '@react-navigation/native';
//Dimensins get
import styles from './styles';
import { metrics, colors as color } from '../../styles'
import { Header } from '../../components';

function DetailsScreen({ route, navigation }) {

  const { colors } = useTheme();
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
    <SafeAreaView style={[styles.container, {backgroundColor: colors.background}]}>

      <Container style={{backgroundColor: colors.background}}>
        <Header style={styles.header}>
          <View style={{ flexDirection: 'row', marginRight: (metrics.screenWidth / 2) - metrics.screenWidth / 6 }}>
            <Left>
              <Button transparent onPress={backHome}>
                <Icon style={{ color: color.white }} name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Text style={styles.headerTitle}>Juazeiro Livre</Text>
            </Body>
          </View>
        </Header>
        

        <Content>
    
          <CardItem style={{backgroundColor: colors.background}}>
            <Left>
              <Thumbnail source={{ uri: avatar }} />
              <Body>
                <Text style={{color:colors.text}}>{by}</Text>
                <Text style={{color:colors.text}} note>{data}</Text>
              </Body>
            </Left>
          </CardItem>
          <Text style={[styles.tittle, {color:colors.text}]}>{tittle}</Text>
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
          <Body style={{paddingHorizontal:20}}>
            <Text style={[styles.Text, {color:colors.text}]}>{text}</Text>
            <Text style={[, {color:colors.text}]}>
              "{ref}"
              </Text>
            <CardItem style={{backgroundColor: colors.background}}>
              <Left>
                <Button onPress={() => shareContent()} transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="md-share" />
                  <Text style={{color:colors.text}}>Compartilhar</Text>
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