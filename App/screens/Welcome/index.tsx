import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import {interpolateColor, useScrollHandler } from "react-native-redash";

import Slide, { SLIDE_HEIGHT, BORDER_RADIUS } from "./Slide";

import Subslide from "./Subslide";
import Dot from '../../components/Dot';

import Animated, { multiply, divide } from "react-native-reanimated";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",

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
    }
})

const slides = [
    {
        title: "Novidade",
        subtitle: "Juazeiro na palma da mão!",
        description: "Um aplicativo totalmente desenhado para você obter de forma fácil, o acesso a informação e transparencia do município de Juazeiro.",
        color: "#BFEAF5",
        picture: require("./assets/01.png")
    },
    {
        title: "Feed",
        subtitle: "Um feed de notícias",
        description: "Você terá um feed de notícias na sua tela inicial para poder se manter sempre atualizado sobre nossas novidades.",
        color: "#BEECC4",
        picture: require("./assets/02.png")
    },
    {
        title: "Criador",
        subtitle: "Cléber de Jesus",
        description: "Um cidadão, professor e amigo que queria uma Juazeiro melhor e mais transparente para todos, que deu a cara tapa para tornar isso possível.",
        color: "#FFE4D9",
        picture: require("./assets/03.png")
    },
    {
        title: "Preparado",
        subtitle: "Vamos começar?",
        description: "Agora, vamos começar a o novo aplicativo, Juazeiro livre! Se curtiu, nos siga nas redes sociais...Let's Go!",
        color: "#FFDDDD",
        picture: require("./assets/04.png")
    }
]

const Welcome = () => {
    const scroll = useRef<Animated.ScrollView>(null);
    const { scrollHandler, x } = useScrollHandler();
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map(slide => slide.color),
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
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
                            flexDirection:'row',
                            width: width * slides.length,
                            transform: [{ translateX: multiply(x, -1) }]
                        }
                    }>
                        
                    {slides.map(({ description, subtitle }, index) => (
                        <Subslide
                            key={index}
                            onPress={() => {
                                if (scroll.current) {
                                    scroll.current
                                        .getNode()
                                        .scrollTo({ x: width * (index + 1), animated: true })
                                }
                            }}
                            last={index === (slides.length - 1)}
                            {...{ description, subtitle }}
                        />
                    ))}

               </Animated.View>
                </View>
            </View>
        </View>
    )
}

export default Welcome;