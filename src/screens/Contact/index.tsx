import React from 'react';
import { View } from 'react-native';
import { Icon, Thumbnail, Button } from 'native-base';
import * as Linking from 'expo-linking';
import { Header, Card, WaveSvg, Text, SwitchButton, View as MyView } from '../../components';
import styles from './styles';
import { colors as color } from '../../styles';
import { useTheme } from '@react-navigation/native';
import { ThemeContext } from '../../config/ThemeContext';


const Contact = () => {
  const { colors } = useTheme();
  const { toggleTheme } = React.useContext(ThemeContext);
  return (
    <MyView style={styles.Container}>
      <WaveSvg
        customStyles={styles.svgCurve}
        customHeight={520}
        customTop={400}
        customBgColor={color.yellow}
        customWavePattern="M0,288L1440,32L1440,0L0,0Z"
      />
      <Header>
        <View style={{ flexDirection: 'row', }}>
          <View style={{ flex: 1, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.headerTitle}>Fale Conosco</Text>
          </View>
          <View style={{ marginTop: 5, marginRight: 25 }}>
            <SwitchButton onPress={() => { toggleTheme() }} />
          </View>
        </View>
      </Header>
      <View style={styles.HeaderBackGround} />


      <View style={styles.Content}>

        <Card>
          <View style={styles.CardContent}>
            <Thumbnail source={require('../../../assets/avatar.png')} />
            <View style={styles.TextContent}>
              <Text style={styles.tittle}>Cléber Jesus</Text>
              <Text style={styles.text}>Professor, músico, idealizador e mantenedor do projeto Juazeiro Livre.</Text>
            </View>
          </View>
        </Card>


        <Card>
          <Button onPress={() => {
            Linking.openURL('mailto:contato@juazeirolivre.com');
          }}
            transparent
            textStyle={{ color: colors.text }}>
            <View style={styles.CardContent}>
              <Icon style={[styles.Icon, { color: color.red }]} name="ios-mail-open" />
              <View style={styles.TextContent}>
                <Text style={styles.tittle}>Email</Text>
                <Text style={styles.text}>contato@juazeirolivre.com</Text>
              </View>
            </View>
          </Button>
        </Card>

        <Card>
          <Button onPress={() => {
            Linking.openURL('http://www.juazeirolivre.com/');
          }}
            transparent
            textStyle={{ color: colors.text }}>
            <View style={{ flexDirection: 'row' }}>
              <Icon style={styles.Icon} name="ios-globe" />
              <View style={styles.TextContent}>
                <Text style={styles.tittle}>Website</Text>
                <Text style={styles.text}>www.juazeirolivre.com</Text>
              </View>
            </View>
          </Button>
        </Card>

        <Card>
          <Button onPress={() => {
            Linking.openURL('https://facebook.com/juazeirobalivre');
          }}
            transparent
            textStyle={{ color: colors.text }}>

            <View style={{ flexDirection: 'row' }}>
              <Icon style={[styles.Icon, { color: color.facebook }]} name="logo-facebook" />
              <View style={styles.TextContent}>
                <Text style={styles.tittle}>Facebook</Text>
                <Text style={styles.text}>@juazeirobalivre</Text>
              </View>
            </View>

          </Button>
        </Card>

        <Card>
          <Button onPress={() => {
            Linking.openURL('https://instagram.com/juazeirobalivre');
          }}
            transparent
            textStyle={{ color: colors.text }}>

            <View style={{ flexDirection: 'row' }}>
              <Icon style={[styles.Icon, { color: color.red }]} name="logo-instagram" />
              <View style={styles.TextContent}>
                <Text style={styles.tittle}>Instagram</Text>
                <Text style={styles.text}>@juazeirobalivre</Text>
              </View>
            </View>

          </Button>
        </Card>
      </View>
    </MyView>
  )
}
export default Contact;
