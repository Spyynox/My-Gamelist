import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import { Card } from 'react-native-elements'

export default class Top extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // Allows you to have a loading image to see if an API is still loading
            isLoading: true,

            // Allows mapped data
            dataSource: null,

            // Count the number of games
            count: 1,
        }
    }


    componentDidMount() {
        // I call a single API
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

    // This function is used not to call this piece of code several times each time
    _renderItem = ({ item, index }) => {
        return (
            <View>
                <Text style={styles.textCenter}>N°{this.state.count++}</Text>
                <Card>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Divider />
                    <View style={styles.user}>
                        <Card.Image source={{ uri: item.background_image }} />
                        <Text style={styles.name}>platforms: {item.platforms[0].platform.name}</Text>
                        <Card.Divider />
                        <Text style={styles.name}>Genre: {item.genres[0].name}</Text>
                    </View>
                </Card>
            </View>
        )
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            )
        } else {

            // I call the _renderItem
            return(
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            )

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
