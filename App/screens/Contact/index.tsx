import React from 'react';
import { View, Text } from 'react-native';
import { Header, Card, WaveSvg } from '../../components';
import { Icon, Thumbnail, Button } from 'native-base';
import * as Linking from 'expo-linking';
import styles from './styles';
import { colors } from '../../styles';


const Contact = () => {

  return (
    <View style={styles.Container}>
      <WaveSvg
        customStyles={styles.svgCurve}
        customHeight={520}
        customTop={400}
        customBgColor={colors.yellow}
        customWavePattern="M0,288L1440,32L1440,0L0,0Z"
      />
      <Header>
        <Text style={styles.headerTitle}>Fale com a Gente</Text>
      </Header>
      <View style={styles.HeaderBackGround} />


      <View style={styles.Content}>

        <Card>
          <View style={styles.CardContent}>
            <Thumbnail source={require('../../../assets/avatar.png')} />
            <View style={styles.TextContent}>
              <Text style={styles.tittle}>Cléber Jesus</Text>
              <Text>Professor, músico, idealizador e mantentor do projeto Juazeiro Livre.</Text>
            </View>
          </View>
        </Card>


        <Card>
          <Button onPress={() => {
            Linking.openURL('mailto:contato@juazeirolivre.com');
          }}
            transparent
            textStyle={{ color: '#87838B' }}>
            <View style={styles.CardContent}>
              <Icon style={[styles.Icon, { color: colors.red }]} name="ios-mail-open" />
              <View style={styles.TextContent}>
                <Text style={styles.tittle}>Email</Text>
                <Text>contato@juazeirolivre.com</Text>
              </View>
            </View>
          </Button>
        </Card>

        <Card>
          <Button onPress={() => {
            Linking.openURL('http://www.juazeirolivre.com/');
          }}
            transparent
            textStyle={{ color: '#87838B' }}>
            <View style={{ flexDirection: 'row' }}>
              <Icon style={styles.Icon} name="ios-globe" />
              <View style={styles.TextContent}>
                <Text style={styles.tittle}>Website</Text>
                <Text>www.juazeirolivre.com</Text>
              </View>
            </View>
          </Button>
        </Card>

        <Card>
          <Button onPress={() => {
            Linking.openURL('https://facebook.com/juazeirobalivre');
          }}
            transparent
            textStyle={{ color: '#87838B' }}>

            <View style={{ flexDirection: 'row' }}>
              <Icon style={[styles.Icon, { color: colors.facebook }]} name="logo-facebook" />
              <View style={styles.TextContent}>
                <Text style={styles.tittle}>Facebook</Text>
                <Text>www.facebook.com/juazeirobalivre</Text>
              </View>
            </View>

          </Button>
        </Card>

        <Card>
          <Button onPress={() => {
            Linking.openURL('https://instagram.com/juazeirobalivre');
          }}
            transparent
            textStyle={{ color: '#87838B' }}>

            <View style={{ flexDirection: 'row' }}>
              <Icon style={[styles.Icon, { color: colors.red }]} name="logo-instagram" />
              <View style={styles.TextContent}>
                <Text style={styles.tittle}>Instagram</Text>
                <Text>@juazeirobalivre</Text>
              </View>
            </View>

          </Button>
        </Card>
      </View>
    </View>
  )
}
export default Contact;
