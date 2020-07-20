import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Tabs, Tab, TabHeading, Icon } from 'native-base';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Header from '../../components/Header';
console.disableYellowBox = true;

const Transparencia = () => {

    return (
        <>
        <Header>
            <Text style={styles.headerTitle}>Prefeitura Transparente</Text>
        </Header>

            <Tabs >
            <Tab heading={ <TabHeading><Icon name="book" /><Text>Educação</Text></TabHeading>}>
                    <Tab2 />
                </Tab>
                <Tab heading={ <TabHeading><Icon name="logo-usd" /><Text>Orçamento</Text></TabHeading>}>
                    <Tab3 />
                </Tab>
                <Tab heading={ <TabHeading><Icon name="ios-medkit" /><Text>Saúde</Text></TabHeading>}>
                    <Tab4 />
                </Tab>
            </Tabs>

        </>
    )




}

export default Transparencia;

const styles = StyleSheet.create({

    headerTitle: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
    },

})