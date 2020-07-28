import React from 'react';
import { View, Text } from 'react-native';
import { Header, Card } from '../../components';
import { Icon, Thumbnail } from 'native-base';
import styles from './styles';
import { colors} from '../../styles';

const Contact = () => {

  return (
    <View style={styles.Container}>
      <Header>
        <Text style={styles.headerTitle}>Fale com a Gente</Text>
      </Header>
      <View style={styles.HeaderBackGround} />
      <View style={styles.Content}>

        <Card>
          <View style={styles.CardContent}>
            <Thumbnail source={require('../../../assets/avatar.png')} />
            <View style={styles.TextContent}>
              <Text style={styles.tittle}>Cleber Jesus</Text>
              <Text>Fundador e mantentor do projeto juazeiro livre</Text>
            </View>
          </View>
        </Card>

        <Card>
        <View style={styles.CardContent}>
            <Icon style={[styles.Icon, {color:colors.red}]} name="ios-mail-open" />
            <View style={styles.TextContent}>
              <Text style={styles.tittle}>Email</Text>
              <Text>contato@juazeirolivre.com</Text>
            </View>
          </View>
        </Card>

        <Card>
        <View style={{flexDirection:'row'}}>
            <Icon style={styles.Icon} name="ios-globe" />
            <View style={styles.TextContent}>
              <Text style={styles.tittle}>Website</Text>
              <Text>www.juazeirolivre.com</Text>
            </View>
          </View>
        </Card>

        <Card>
        <View style={{flexDirection:'row'}}>
            <Icon style={[styles.Icon, {color:colors.facebook}]} name="logo-facebook" />
            <View style={styles.TextContent}>
              <Text style={styles.tittle}>Facebook</Text>
              <Text>www.facebook.com/juazeirobalivre</Text>
            </View>
          </View>
        </Card>

        <Card>
          
        <View style={{flexDirection:'row'}}>
            <Icon style={[styles.Icon, {color:colors.red}]} name="logo-instagram" />
            <View style={styles.TextContent}>
              <Text style={styles.tittle}>Instagram</Text>
              <Text>@juazeirobalivre</Text>
            </View>
          </View>
        </Card>

      </View>
    </View>
  )
}
export default Contact;
