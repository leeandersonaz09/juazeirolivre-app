import React, { useRef, useState } from "react";
import { View, StyleSheet, Dimensions, AsyncStorage, Image, StatusBar} from "react-native";
import { interpolateColor, useScrollHandler } from "react-native-redash";

import Slide, { SLIDE_HEIGHT, BORDER_RADIUS } from "./Slide";
import { colors } from '../../styles';
import Subslide from "./Subslide";
import Dot from '../../components/Dot';

import Animated, { multiply, divide, interpolate, Extrapolate } from "react-native-reanimated";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../config/navigation";
const { width } = Dimensions.get("window");
const CHECK_IS_NEW = 'WelcomeFirst';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
        alignItems: "center",
        borderBottomRightRadius: BORDER_RADIUS,
        overflow: "hidden",
    },
    slider: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: BORDER_RADIUS,
    },
    pagination: {
        ...StyleSheet.absoluteFillObject,
        height: BORDER_RADIUS,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        flex: 1,
    },
    footerContent: {
        flex: 1,
        backgroundColor: colors.white,

        borderTopLeftRadius: BORDER_RADIUS
    },

})

const slides = [
    {
        title: "Juazeiro Livre",
        subtitle: "Juazeiro na palma da mão!",
        description: "Um aplicativo idealizado pelo professor Cléber Jesus, para dar acesso a informação com transparência sobre o município de Juazeiro.",
        color: "#1e213d",
        picture: {
            src: require("./assets/01.webp"),
            width: 2160,
            height: 2517,
        },
    },
    {
        title: "Fiscalização",
        subtitle: "Fiscalização",
        description: "Um trabalho de fiscalização nunca feito na cidade.",
        color: '#1e213d',
        picture: {
            src: require("./assets/02.webp"),
            width: 2160,
            height: 2517,
        },
    },
    {
        title: "Transparência",
        subtitle: "Gastos de prefeitos e vereadores",
        description: "Gastos da prefeitura e da câmara. Mais transparência e informação na palma da mão do cidadão de Juazeiro!",
        color: '#1e213d',
        picture: {
            src: require("./assets/03.webp"),
            width: 2160,
            height: 2517,
        },
    },
    {
        title: "Preparado",
        subtitle: "Vamos começar?",
        description: "Agora, vamos ao aplicativo Juazeiro livre! Nos siga nas redes sociais e acesse nosso site www.juazeirolivre.com... Let's Go!",
        color: "#1e213d",
        picture: {
            src: require("./assets/04.webp"),
            width: 2160,
            height: 2517,
        },
    }
]
type Props = {
    navigation: StackNavigationProp<StackParamList, 'Tabs'>;
}

const Welcome: React.FC<Props> = ({ navigation }) => {

    const scroll = useRef<Animated.ScrollView>(null);
    const { scrollHandler, x } = useScrollHandler();
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map(slide => slide.color),
    });
    const [bar, setBar] = useState(true);

    const submit = async () => {
        // Saves to storage as a JSON-string
        await AsyncStorage.setItem(CHECK_IS_NEW, JSON.stringify(true))
            .then(() => {
                setBar(false);
                navigation.navigate('Tabs');
            });

    }

    return (
        <View style={styles.container}>

            <StatusBar
                hidden={bar}
                translucent={bar}
                animated={true}
            />

            <Animated.View style={[styles.slider, { backgroundColor }]}>
                {slides.map(({ picture }, index) => {
                    const opacity = interpolate(x, {
                        inputRange: [
                            (index - 0.5) * width,
                            index * width,
                            (index + 0.5) * width,
                        ],
                        outputRange: [0, 1, 0],
                        extrapolate: Extrapolate.CLAMP,
                    })
                    return (
                        <Animated.View style={[styles.underlay, { opacity }]} key={index}>
                            <Image source={picture.src} style={{
                                width: width - BORDER_RADIUS,
                                height: ((width - BORDER_RADIUS) * picture.height) / picture.width
                            }}
                            />
                        </Animated.View>
                    );
                })}

                <Animated.ScrollView
                    ref={scroll}
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    {...scrollHandler}
                >
                    {slides.map(({ title, picture }, index) => (
                        <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
                    ))}

                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
                />
                <View style={styles.footerContent}>
                    <View style={styles.pagination}>
                        {slides.map((_, index) => (
                            <Dot
                                key={index}
                                currentIndex={divide(x, width)}
                                {...{ index }}
                            />
                        ))}
                    </View>
                    <Animated.View style={{
                        flex: 1,
                        flexDirection: 'row',
                        width: width * slides.length,
                        transform: [{ translateX: multiply(x, -1) }]
                    }
                    }>

                        {slides.map(({ description, subtitle }, index) => {
                            const last = index === slides.length - 1;
                            return (
                                (
                                    <Subslide
                                        key={index}
                                        onPress={() => {

                                            if (last) {
                                                submit();
                                            } else {
                                                scroll.current
                                                    ?.getNode()
                                                    .scrollTo({ x: width * (index + 1), animated: true })
                                            }


                                        }}

                                        {...{ description, subtitle, last }}
                                    />
                                )
                            )
                        }
                        )}

                    </Animated.View>
                </View>
            </View>
        </View>
    )
}

export default Welcome;