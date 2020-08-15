import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Tabs, Tab, TabHeading, Icon, View, ScrollableTab } from 'native-base';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import { colors } from '../../styles'
import { Header, SwitchButton } from '../../components';
import { ThemeContext } from '../../config/ThemeContext';

const Transparencia = () => {
    const { toggleTheme } = React.useContext(ThemeContext);
    return (
        <>
            <Header>
                <View style={{ flexDirection: 'row', }}>

                    <View style={{ flex: 1, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={[styles.headerTitle, {marginLeft:'10%'}]}>Conheça Nossas Ideias</Text>
                    </View>
                    <View style={{marginTop:25, marginRight:25}}>
                        <SwitchButton onPress={() => { toggleTheme() }} />
                    </View>
                </View>
            </Header>

            <Tabs tabBarUnderlineStyle={{ backgroundColor: colors.yellow }} renderTabBar={() => <ScrollableTab />}>
                <Tab heading={<TabHeading style={{ backgroundColor: colors.primary }}><Icon style={styles.TabIcon} name="md-school" /><Text style={styles.TabText} >Na Educação</Text></TabHeading>}>
                    <Tab1 />
                </Tab>
                <Tab heading={<TabHeading style={{ backgroundColor: colors.primary }}><Icon style={styles.TabIcon} name="ios-people" /><Text style={styles.TabText} >Na Câmara</Text></TabHeading>}>
                    <Tab2 />
                </Tab>
                <Tab heading={<TabHeading style={{ backgroundColor: colors.primary }}><Icon style={styles.TabIcon} name="ios-search" /><Text style={styles.TabText} >Fiscalização</Text></TabHeading>}>
                    <Tab3 />
                </Tab>
                <Tab heading={<TabHeading style={{ backgroundColor: colors.primary }}><Icon style={styles.TabIcon} name="logo-octocat" /><Text style={styles.TabText} >Proteção Animal</Text></TabHeading>}>
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
        color: colors.white,
        marginTop: 25,
        fontWeight: "bold",
    },
    TabText: {
        color: colors.white,
    },
    TabIcon: {
        padding: 10,
        color: colors.yellow,
    }

})