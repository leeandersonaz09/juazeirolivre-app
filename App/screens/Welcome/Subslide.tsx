import React from "react";
import { View, StyleSheet, Text, Dimensions, AsyncStorage } from "react-native";
import Button from "../../components/Button";
import navigation from "../../config/navigation";
import { Tabs } from "native-base";

const MY_STORAGE_KEY = 'WelcomeFirst';

const { height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 44,
    },
    subtitle: {
       //fontFamily:"SFProText-Semibold",
       fontSize: 20,
       lineHeight: 30,
       marginBottom: 12,
       color: "#0C0D34",
       textAlign: "center"
    },
    description: {
       // fontFamily:"SFProText-Regular",
        fontSize: 12,
        lineHeight:24,
        color: "#0C0D34",
        textAlign: "center",
        marginBottom: 20,
        

    }
   
})



interface SubslideProps {
    subtitle: string;
    description: string;
    last?: boolean;
    onPress: () => void;
    
}

const Subslide = ({ description, subtitle, last, onPress }: SubslideProps) => {

    const submit = async ({ navigation }) => {
        navigation.navigate('Home');
        console.log('FUNCIONA');
        // Saves to storage as a JSON-string
       await AsyncStorage.setItem(MY_STORAGE_KEY, JSON.stringify(false));
    
    }

    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.description}>{description}</Text>
            <Button
             label={last ? "Vamos começar?" : "Próximo" } 
             variant={last ? "primary" : "default"}
             {... last ? { onPress: submit} : {onPress}}
             />
        </View>
    );
}

export default Subslide;