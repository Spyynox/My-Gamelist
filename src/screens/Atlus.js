import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image } from 'react-native';
import { Card } from 'react-native-elements'

export default class Atlus extends React.Component {

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
        return fetch('https://api.rawg.io/api/games?developers=atlus&page_size=3')
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

    _renderItem = ({ item, index }) => {
        return (
            <View>
                <Text style={styles.textCenter}>N°{this.state.count++}</Text>
                <Card>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Divider />
                    <View style={styles.user}>
                        <Card.Image source={{ uri: item.background_image }} />
                        <Text style={styles.name}>Date de sortie: {item.released}</Text>
                        <Text style={styles.name}>platforms: {item.platforms[0].platform.name}</Text>
                        <Text style={styles.name}>Genre: {item.genres[0].name}</Text>
                        <Card.Divider />

                        {item?.platforms[0]?.requirements_en?.minimum ?
                            <Text style={styles.name}>Configuration minimal: {item.platforms[0].requirements_en.minimum}</Text>
                            :
                            <Text>Configuration minimale: Aucune donnée a été communiquer</Text>
                        }

                        <Card.Divider />

                        {item?.platforms[0]?.requirements_en?.recommended ?
                            <Text style={styles.name}>Configuration maximal: {item.platforms[0].requirements_en.recommended}</Text>
                            :
                            <Text>Configuration maximale: Aucune donnée a été communiquer</Text>
                        }

                        <Text>Screenshots</Text>
                        <View style={styles.imageFlex}>
                            <Image style={styles.image} source={{ uri: item.short_screenshots[1].image }} />
                            <Image style={styles.image} source={{ uri: item.short_screenshots[2].image }} />
                            <Image style={styles.image} source={{ uri: item.short_screenshots[3].image }} />
                        </View>
                    </View>

                    <Card.Divider />
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
            return (
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

    imageFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    image: {
        height: 75,
        width: 75,
    }

});
