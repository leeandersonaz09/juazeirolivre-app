import React, { Component, useState, useEffect } from 'react';
import {StyleSheet,} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Tabs, Tab } from 'native-base';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';

console.disableYellowBox = true;

const Transparencia = () => {

    return (
        <Container>
            <Header>
                <Body>
                    <Title>Prefeitura</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='logo-facebook' onPress={()=> Linking.openURL("https://web.facebook.com/cleberjesus31")} />
                    </Button>
                    <Button transparent>
                        <Icon name='more' />
                    </Button>
                </Right>
            </Header>
            <Tabs >
                <Tab heading="Educação">
                    <Tab2 />
                </Tab>
                <Tab heading="Orçamento">
                    <Tab3 />
                </Tab>
                <Tab heading="Saúde">
                    <Tab4 />
                </Tab>
            </Tabs>
        </Container>
    )




}

export default Transparencia;

const styles = StyleSheet.create({



})