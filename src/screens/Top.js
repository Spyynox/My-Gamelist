import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Image } from 'react-native';
import { Card } from 'react-native-elements'

export default class Top extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // Permet d'avoir une image de loading pour voir si une API charge encore
            isLoading: true,

            // Permet mapé une data
            dataSource: null,

            // compter le nombre de jeux
            count: 1,
        }
    }


    componentDidMount() {
        // J'appelle une seule API
        return fetch('https://api.rawg.io/api/games?dates=2015-01-01,2019-12-31&ordering=-added&page_size=10')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.results,
                })
            })

            .catch((error) => {
                console.log(error);
            })

    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            )
        } else {

            // J'appelle la data de cette page
            let Top10 = this.state.dataSource.map((val, key) => {
                return(
                    <View key={key}>
                        <Text style={styles.textCenter}>N°{this.state.count++}</Text>
                        <Card>
                            <Card.Title>{val.name}</Card.Title>
                            <Card.Divider />
                            <View style={styles.user}>
                                {/* <Card.Image source={{ uri: val.background_image }} /> */}
                                <Text style={styles.name}>platforms: {val.platforms[0].platform.name}</Text>
                                <Card.Divider />
                                <Text style={styles.name}>Genre: {val.genres[0].name}</Text>
                            </View>
                        </Card>
                    </View>
                )
            })

            return (
                <ScrollView>
                    {Top10}
                </ScrollView>
            );

        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textCenter: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 18,
        color: 'blue',
        marginTop: 10,
    },

});
