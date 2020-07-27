import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    ScrollView
} from 'react-native';
import Card from '../../components/Card';
import Separator from '../../components/Separator';

import styles from './styles';

const Tab2 = () => {

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>
                <ImageBackground
                    source={{uri:'https://i2.wp.com/ricardobanana.com.br/wp-content/uploads/2017/09/C%C3%A2mara-de-Juazeiro-ba.jpg?fit=620%2C465&ssl=1'}}
                    style={styles.backgrounImage}
                    imageStyle={styles.imageStyle}
                >
                    <View style={styles.darkOverlay}></View>
                    <View style={styles.imageContainer}>
                        <Text style={styles.UserGreat}>Atuação na Câmara</Text>
                        <Text style={styles.userText}>Segundo o IBGE</Text>
                    </View>

                </ImageBackground>

                <View style={styles.contentContainer}>
                    <Card>
                        

                    </Card>
              

                </View>

            </ScrollView>
        </SafeAreaView >
    )


}
export default Tab2;