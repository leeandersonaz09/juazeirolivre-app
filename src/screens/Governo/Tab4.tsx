import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    ScrollView,
    Image
} from 'react-native';
import { colors as color } from '../../styles';
import { useTheme } from '@react-navigation/native';
import { WaveSvg, View as MyView } from '../../components';
import styles from './styles';

const Tab4 = () => {
    const { colors } = useTheme();
    return (
        <MyView style={styles.container}>
            <WaveSvg
                customStyles={styles.svgCurve}
                customHeight={320}
                customTop={260}
                customBgColor={color.yellow}
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


                    <View style={[styles.card, {backgroundColor: colors.card}]}>
                        <View style={styles.cardContent}>
                            <Image
                                resizeMode="contain"
                                style={styles.Img}
                                source={require('./assets/01.jpg')}
                            />
                        </View>
                    </View>

                    <View style={[styles.card, {backgroundColor: colors.card}]}>
                        <View style={styles.cardContent}>
                            <Image
                                resizeMode="contain"
                                style={styles.Img}
                                source={require('./assets/02.jpg')}
                            />
                        </View>
                    </View>

                    <View style={[styles.card, {backgroundColor: colors.card}]}>
                        <View style={styles.cardContent}>
                            <Image
                                resizeMode="contain"
                                style={styles.Img}
                                source={require('./assets/03.jpg')}
                            />
                        </View>
                    </View>

                    <View style={[styles.card, {backgroundColor: colors.card}]}>
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
        </MyView>
    )


}
export default Tab4;