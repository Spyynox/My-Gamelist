import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Button } from 'react-native';

function Navbar(props) {
    const { navigation } = props;
    return(
        <View style={styles.container}>
            <Button
                title="Home"
                onPress={() =>
                    navigation.navigate('Home')
                }
            />
            <Button
                title="Detail"
                onPress={() =>
                    navigation.navigate('Detail')
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7fffd4',
        padding: 10,
        paddingTop:40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default Navbar;