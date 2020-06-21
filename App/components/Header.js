import React from 'react';
import {View, StyleSheet, StatusBar } from 'react-native'

export default function Header(props) {

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#3b49b6" />

            <View style={styles.header}>
                {props.children}
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    header: {
        height: 60,
        width: '100%',
        backgroundColor: '#3b49b6',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        elevation:3,         
        shadowOffset: {width:1, height:1},
        shadowColor:'#333',
        shadowOpacity: 0.3,
        shadowRadius: 3
      },

})