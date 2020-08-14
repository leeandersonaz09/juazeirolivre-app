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
import { WaveSvg, View as MyView} from '../../components';
import styles from './styles';

const Tab2 = () => {
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
                    source={require('./assets/camara.jpg')}
                    style={styles.backgrounImage}
                    imageStyle={styles.imageStyle}
                >
                    <View style={styles.darkOverlay}></View>
                    <View style={styles.imageContainer}>
                        <Text style={styles.UserGreat}>Atuação na Câmara</Text>
                        
                    </View>

                </ImageBackground>

                <View style={styles.contentContainer}>

                    <View style={[styles.card, {backgroundColor: colors.background}]}>
                        <View style={styles.cardContent}>
                            <Image
                                resizeMode="contain"
                                style={styles.Img}
                                source={require('./assets/ed03.jpg')}
                            />
                        </View>
                    </View>

                </View>

            </ScrollView>
        </MyView >
    )


}
export default Tab2;