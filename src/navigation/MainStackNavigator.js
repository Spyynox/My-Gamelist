import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Home from '../screens/Home'
import Top from '../screens/Top';

const Stack = createStackNavigator()

function MainStackNavigator() {
    return ( 
        // Paramètre des liens liens des navigateurs
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' /* Page Principal */>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Home Screen' }}
                />
                <Stack.Screen
                    name="Top"
                    component={Top}
                    options={{ title: 'Top jeux 2015 - 2020' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStackNavigator