import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Home from '../screens/Home';
import Atlus from '../screens/Atlus';
import Top from '../screens/Top';
import Top2019 from '../screens/Top2019';
import Top2018 from '../screens/Top2018';
import Top2017 from '../screens/Top2017';
import Top2016 from '../screens/Top2016';
import Top2015 from '../screens/Top2015';

const Stack = createStackNavigator()

function MainStackNavigator() {
    return ( 
        // Browser links settings
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' /* Principal page */>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Home Screen' }}
                />
                <Stack.Screen
                    name="Atlus"
                    component={Atlus}
                    options={{ title: 'Atlus' }}
                />
                <Stack.Screen
                    name="Top"
                    component={Top}
                    options={{ title: 'Top jeux 2015 - 2020' }}
                />
                <Stack.Screen
                    name="Top2019"
                    component={Top2019}
                    options={{ title: 'Top jeux 2019' }}
                />
                <Stack.Screen
                    name="Top2018"
                    component={Top2018}
                    options={{ title: 'Top jeux 2018' }}
                />
                <Stack.Screen
                    name="Top2017"
                    component={Top2017}
                    options={{ title: 'Top jeux 2017' }}
                />
                <Stack.Screen
                    name="Top2016"
                    component={Top2016}
                    options={{ title: 'Top jeux 2016' }}
                />
                <Stack.Screen
                    name="Top2015"
                    component={Top2015}
                    options={{ title: 'Top jeux 2015' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStackNavigator