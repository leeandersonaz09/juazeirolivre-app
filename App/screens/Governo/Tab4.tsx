import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    ScrollView,
    Image
} from 'react-native';
import styles from './styles';

const Tab4 = () => {

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


                    <View style={styles.card}>
                        <View style={styles.cardContent}>
                            <Image
                                resizeMode="contain"
                                style={styles.Img}
                                source={require('./assets/01.jpg')}
                            />
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.cardContent}>
                            <Image
                                resizeMode="contain"
                                style={styles.Img}
                                source={require('./assets/02.jpg')}
                            />
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.cardContent}>
                            <Image
                                resizeMode="contain"
                                style={styles.Img}
                                source={require('./assets/03.jpg')}
                            />
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.cardContent}>
                            <Image
                                resizeMode="contain"
                                style={styles.Img}
                                source={require('./assets/04.jpg')}
                            />
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )


}
export default Tab4;