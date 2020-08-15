import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Tabs, Tab, TabHeading, Icon, View } from 'native-base';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import { colors } from '../../styles'
import { Header, SwitchButton } from '../../components';
import { ThemeContext } from '../../config/ThemeContext';

const downloads = () => {
    const { toggleTheme } = React.useContext(ThemeContext);
    return (
        <>
            <Header>
                <View style={{ flexDirection: 'row', marginBottom:15}}>
                    <View style={{ flex: 1, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={[styles.headerTitle, { marginLeft: '10%' }]}>Juazeiro Transparente</Text>
                    </View>
                    <View style={{ marginTop: 25, marginRight: 25 }}>
                        <SwitchButton onPress={() => { toggleTheme() }} />
                    </View>
                </View>
            </Header>

            <Tabs tabBarUnderlineStyle={{ backgroundColor: colors.yellow }}>
                <Tab heading={<TabHeading style={{ backgroundColor: colors.primary }}><Icon style={styles.TabIcon} name="md-school" /><Text style={styles.TabText} >Educação</Text></TabHeading>}>
                    <Tab2 />
                </Tab>
                <Tab heading={<TabHeading style={{ backgroundColor: colors.primary }}><Icon style={styles.TabIcon} name="ios-people" /><Text style={styles.TabText} >Vereadores</Text></TabHeading>}>
                    <Tab3 />
                </Tab>
                <Tab heading={<TabHeading style={{ backgroundColor: colors.primary }}><Icon style={styles.TabIcon} name="ios-medkit" /><Text style={styles.TabText} >Saúde</Text></TabHeading>}>
                    <Tab4 />
                </Tab>
            </Tabs>

        </>
    )




}

export default downloads;

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