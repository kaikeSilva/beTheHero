/**
 * para fazer navegação é usada a biblioteca react navigation
 * comando: npm install @react-navigation/native
 * 
 * instalar as dependencias no projeto expo
 * cmd: expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
 * 
 * Definnir o tipo de navegação da aplicação, nesse caso sera usado o stacknavigation,
 * que é a navegação por botões.
 * comando: npm install @react-navigation/stack
 * */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/incidents';
import Detail from './pages/detail';
 

export default function Routes() {
return (
    <NavigationContainer >
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Incidents" component={Incidents}/>
            <AppStack.Screen name="Detail" component={Detail}/>
        </AppStack.Navigator>
    </NavigationContainer>
);
}