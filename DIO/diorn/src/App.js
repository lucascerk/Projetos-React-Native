import React from "react";
import {View, Text, StyleSheet, SafeAreaView, StatusBar, Image} from "react-native";
import DisplayMode from "react-native/Libraries/ReactNative/DisplayMode";

const colorGithub = '#010409'
const colorFonts = '#C9D1D9'
const imagemGithub = 'https://avatars.githubusercontent.com/u/90220756?s=400&u=4ff4b98ba4d168e2227a33af2fb6577e63de6d81&v=4'

const App = () => {
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle={'light-content'}></StatusBar>
            <View style={style.content}>
                <Image 
                style={style.avatar} 
                source={{uri: imagemGithub}}>
                </Image>
                <Text style={[style.Text, style.name]}>Lucas Cerca</Text>
                <Text style={[style.Text, style.TextSocial2, style.TextSocial]}>@lucascerk</Text>
                <Text style={style.TextJobs}>HTML e CSS | Javascript | React Native | Python | C# .NET -- Desenvolvedor</Text>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({

    container: {
        backgroundColor: colorGithub,
        flex: 1, //expandir para a tela inteira
        justifyContent: 'center',
    },

    content: {
        alignItems: 'center',
        padding: 20,
    },

    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'white',
    },

    Text: {
        color: 'white',
        fontFamily: 'Courier',
    },

    name: {
        fontSize: 34,
        fontWeight: 'bold',
    },

    TextJobs: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },

    TextSocial: {
        textDecorationLine: "underline",
    },

    TextSocial2: {
        fontSize: 18,
        color: colorFonts,
    },

});