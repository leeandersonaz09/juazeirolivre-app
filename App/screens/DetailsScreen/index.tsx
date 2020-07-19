import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  Share,
  Animated,
  Dimensions
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
//Dimensins get
const { width } = Dimensions.get('window');
import { general, colors } from '../../styles';
//import Header from '../components/Header';

const scale = new Animated.Value(1);

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
  const [dialog, setDialog] = useState(null)

  const onZoomEvent = Animated.event(
    [
      {
        nativeEvent: { scale: scale }
      }
    ],
    {
      useNativeDriver: true
    }
  )

  const logOutZoomState = (event, gestureState, zoomableViewEventObject) => {
    console.log(`Zoomed from ${zoomableViewEventObject.lastZoomLevel} to  ${zoomableViewEventObject.zoomLevel}`);
  };

  const onZoomStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true
      }).start()
    }
  }

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
        <View style={styles.zoomWrapper}>
          <Image
              style={styles.image}
              source={{ uri: img }}
              resizeMode="contain"
            />

        </View>

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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  zoomWrapper: {
    flex: 1,
    overflow: 'hidden',
  },
  zoomableView: {
    padding: 10,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    marginBottom: 10,
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
    alignContent: 'center',
    marginTop: 10,
    marginBottom: 15,
    marginHorizontal: 10,
    fontSize: 18,

  },
  Ref: {
    fontStyle: 'italic',
    color: "#808080",
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 10,
    marginBottom: 10
  }
});

export default DetailsScreen;