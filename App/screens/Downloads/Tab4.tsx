import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    ScrollView,
    Image
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../../components/Card';
import styles from './styles';
import Separator from '../../components/Separator';

const Tab4 = () => {

    const data = [
        { key: '1', uri: '../../assets/01.jpg' },
        { key: '2', uri: '../../assets/02.jpg' },
        { key: '3', uri: '../../assets/03.jpg' },
        { key: '4', uri: '' }
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ImageBackground
                    source={{ uri: 'https://cdn.pixabay.com/photo/2019/07/04/17/17/hand-4316948_960_720.jpg' }}
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

                    <FlatList
                        data={data}
                        keyExtractor={item => item.key}
                        renderItem={({ item }) => {
                            return (
                                <>
                                    <View style={styles.card}>
                                        <View style={styles.cardContent}>
                                            <Image
                                                resizeMode="contain"
                                                style={styles.Img}
                                                source={require('../../assets/01.jpg')}
                                            />
                                        </View>
                                    </View>
                                </>
                            );
                        }}
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    )


}
export default Tab4;