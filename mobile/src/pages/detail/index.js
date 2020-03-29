import React from 'react';
import {Feather} from '@expo/vector-icons'
import {View, TouchableOpacity, Image, Text, Linking} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import  * as Mailcomposer  from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

export default function Detail() {
    const navigation = useNavigation();
    const message = 'Olá APAD, estou entrando em contato pos gostaria de ajudar no caso "Cadelinha atropelada" com o valor de 120,00 reais';

    function navigationBack () {
        navigation.goBack();
    }

    {/*
        enviar e mail pelo pacote send mai do composer
        comando: expo install expo-mail-composer
        importar: import  * as Mailcomposer  from 'expo-mail-composer';
        e usar a função composerAsync de Mailcomposer
    */}
    function sendMail() {
        Mailcomposer.composeAsync({
            subject: 'Heroi do caso: Cadelinha atropelada sd',
            recipients: ['kaikebsilva62@gmail.com'],
            body: message
        })
    }

    {/*
        tecnologia deepLink permite acessar uma aplicação por uma url
        basta importar { Linking } de react-native

    */}
    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=5562986353623&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>

                <TouchableOpacity onPress={navigationBack}>
                    <Feather name="arrow-left" size={28} color="#e82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop:0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Cadelinha atrropelada</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o heroi deste caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>
                
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}> 
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}> 
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    );
}