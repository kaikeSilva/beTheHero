import React from 'react';
import {Feather} from '@expo/vector-icons'
import {View, TouchableOpacity, Image, Text, Linking} from 'react-native';
import styles from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import  * as Mailcomposer  from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

export default function Detail() {
    {/*Pegar os parametros enviados da pagina incidents */}
    const route = useRoute();
    const incident = route.params.incident;
    const navigation = useNavigation();
    const message = `Olá ${incident.name}, estou entrando em contato pos gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat( 'pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}`;


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
            subject: `Heroi do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message
        })
    }

    {/*
        tecnologia deepLink permite acessar uma aplicação por uma url
        basta importar { Linking } de react-native

    */}
    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
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
                <Text style={styles.incidentValue}>{incident.name}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>Descrição:</Text>
                <Text style={styles.incidentValue}>{incident.description}</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat(
                    'pt-BR',
                    {style: 'currency',
                    currency: 'BRL'})
                    .format(incident.value)}
                </Text>
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