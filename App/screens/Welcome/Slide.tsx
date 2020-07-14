import React from "react";
import { View, StyleSheet, Text, Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;
export const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
    container: {
        width
    },
    tittleContainer: {
        height: 100,
        justifyContent: "center",

    },

    title: {
        fontSize: 70,
        lineHeight: 70,
        //fontFamily: "SFProText-Bold",
        color: "#FFD700",
        shadowColor:"#d8d8d8",
        shadowOpacity: 0.5,
        textAlign: "center"

    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
       justifyContent:"flex-end"
    },
    picture: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        borderBottomRightRadius: BORDER_RADIUS,
    }

})

interface SlideProps {
    title: string;
    right?: boolean;
    picture: number;
}

const Slide = ({ title, right, picture }: SlideProps) => {

    const transform = [
        { translateY: (SLIDE_HEIGHT - 100) / 2 },
        { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
        { rotate: right ? "-90deg" : "90deg" },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.underlay}>
                <Image source={picture} style={styles.picture}/>
            </View>
            <View style={[styles.tittleContainer, { transform }]}>
                <Text style={styles.title}>{title}</Text>
            </View>

        </View>
    );
}

export default Slide;