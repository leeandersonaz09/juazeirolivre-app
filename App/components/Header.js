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
      },

})