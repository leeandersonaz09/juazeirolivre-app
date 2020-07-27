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

const Tab1 = () => {

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>
                <ImageBackground
                    source={{uri: 'https://cdn.pixabay.com/photo/2015/12/15/06/42/kids-1093758_960_720.jpg'}}
                    style={styles.backgrounImage}
                    imageStyle={styles.imageStyle}
                >
                    <View style={styles.darkOverlay}></View>
                    <View style={styles.imageContainer}>
                        <Text style={styles.UserGreat}>Atuação na Educação</Text>
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
export default Tab1;