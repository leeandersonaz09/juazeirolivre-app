import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    ScrollView
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../../components/Card';
import styles from './styles';
import Separator from '../../components/Separator';

const Tab4 = () => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ImageBackground
                    source={{uri: 'https://cdn.pixabay.com/photo/2019/07/04/17/17/hand-4316948_960_720.jpg'}}
                    style={styles.backgrounImage}
                    imageStyle={styles.imageStyle}
                >
                    <View style={styles.darkOverlay}></View>
                    <View style={styles.imageContainer}>
                        <Text style={styles.UserGreat}>Proteção Animal</Text>
                        <Text style={styles.userText}>Segundo o Tribunal de Contas da Bahia</Text>
                    </View>

                </ImageBackground>
                <View style={styles.contentContainer}>


                    <Card>

                    </Card>
                  


                </View>
            </ScrollView>
        </SafeAreaView>
    )


}
export default Tab4;