import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, AsyncStorage, Image } from "react-native";
import { interpolateColor, useScrollHandler } from "react-native-redash";

import Slide, { SLIDE_HEIGHT, BORDER_RADIUS } from "./Slide";

import Subslide from "./Subslide";
import Dot from '../../components/Dot';

import Animated, { multiply, divide, interpolate, Extrapolate } from "react-native-reanimated";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../config/navigation";
const { width } = Dimensions.get("window");
const MY_STORAGE_KEY = 'WelcomeFirst';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#ffff",
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
        backgroundColor: "#ffff",

        borderTopLeftRadius: BORDER_RADIUS
    },

})

const slides = [
    {
        title: "Juazeiro Livre",
        subtitle: "Juazeiro na palma da mão!",
        description: "Um aplicativo idealizado pelo professor Cléber Souza de Jesus, para dar acesso a informação com transparência sobre o município de Juazeiro.",
        color: "#BFEAF5",
        picture: {
            src: require("./assets/01.png"),
            width: 2160,
            height: 2517,
        },
    },
    {
        title: "Feed",
        subtitle: "Feed de notícias",
        description: "Você terá um feed de notícias na sua tela inicial para poder se manter sempre atualizado sobre nossas novidades.",
        color: "#BEECC4",
        picture: {
            src: require("./assets/02.png"),
            width: 2160,
            height: 2517,
        },
    },
    {
        title: "Transparência",
        subtitle: "Gastos da Prefeitura",
        description: "Gastos da prefeitura. Mais transparência e informação na palma da mão do cidadão de Juazeiro!",
        color: "#FFE4D9",
        picture: {
            src: require("./assets/03.png"),
            width: 2160,
            height: 2517,
        },
    },
    {
        title: "Preparado",
        subtitle: "Vamos começar?",
        description: "Agora, vamos aplicativo Juazeiro livre! Nos siga nas redes sociais... Let's Go!",
        color: "#FFDDDD",
        picture: {
            src: require("./assets/04.png"),
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

    const submit = async () => {
        // Saves to storage as a JSON-string
        await AsyncStorage.setItem(MY_STORAGE_KEY, JSON.stringify(true))
        .then(()=>{ 
            navigation.navigate('Tabs');
        });

    }

    return (
        <View style={styles.container}>
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