import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    ScrollView,
    Image
} from 'react-native';
import { WaveSvg } from '../../components';
import styles from './styles';
import { colors } from '../../styles';

const Tab4 = () => {

    return (
        <SafeAreaView style={styles.container}>
            <WaveSvg
                customStyles={styles.svgCurve}
                customHeight={320}
                customTop={260}
                customBgColor={colors.yellow}
                customWavePattern="M0,288L1440,32L1440,0L0,0Z"
            />
            <ScrollView>

                <ImageBackground
                    source={require('./assets/animais.jpg')}
                    style={styles.backgrounImage}
                    imageStyle={styles.imageStyle}
                >
                    <View style={styles.darkOverlay}></View>
                    <View style={styles.imageContainer}>
                        <Text style={styles.UserGreat}>Proteção Animal</Text>

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