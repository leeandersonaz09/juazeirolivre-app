import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Tabs, Tab, TabHeading, Icon, View, Left } from 'native-base';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import { colors, metrics } from '../../styles'
import { Header, SwitchButton } from '../../components';
import { ThemeContext } from '../../config/ThemeContext';

const downloads = () => {
    const { toggleTheme } = React.useContext(ThemeContext);
    return (
        <>
            <Header>
                <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 20 }}>
                    <View style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center', marginLeft: (metrics.screenWidth * 0.50) / 2 }}>
                        <Text style={styles.headerTitle}>Juazeiro Transparente</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 5, alignSelf: 'flex-end', marginRight: 15, flex: 1 }}>
                        <Left />
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