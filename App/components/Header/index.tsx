import React from 'react';
import {View, StyleSheet, StatusBar } from 'react-native'
import {colors} from '../../styles';

export default function Header(props) {

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
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
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',         
        shadowOffset: {width:1, height:1},
        shadowColor:'#333',
        shadowOpacity: 0.3,
        shadowRadius: 3
      },

})
