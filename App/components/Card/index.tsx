import React from 'react';
import { View, StyleSheet } from 'react-native'

export default function Card (props) {

    return (

        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor:'#fff',
        shadowOffset: {width:1, height:1},
        shadowColor:'#333',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        marginHorizontal: 4,
        marginVertical: 6
    },

    cardContent: {
        marginHorizontal:12,
        marginVertical: 10
    }

})