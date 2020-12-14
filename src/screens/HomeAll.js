import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-elements' // Css already implemented on a third-party site
import { FlatList } from 'react-native-gesture-handler';

export default class HomeAll extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // Allows you to have a loading image to see if an API is still loading
            isLoading1: true,
            isLoading2: true,
            isLoading3: true,
            isLoading4: true,
            isLoading5: true,

            // Allows mapped data
            dataSource1: [],
            dataSource2: [],
            dataSource3: [],
            dataSource4: [],
            dataSource5: [],

            total: 481079,
        }
    }


    getData = (subpath = ''/*To add ?page= for another page*/) => fetch(`https://api.rawg.io/api/games${subpath}`)
        .then(response => response.json())
        .then(data => data.results); // I call the results value of the api for short.

    componentDidMount() {
        // I call a Promise to call several APIs at the same time
        Promise.all([
            this.getData(),
            this.getData('?page=2'),
            this.getData('?page=3'),
            this.getData('?page=4'),
            this.getData('?page=5'),
        ])
            .then(([dataSource1, dataSource2, dataSource3, dataSource4, dataSource5]) => {
                this.setState({
                    isLoading1: false,
                    dataSource1,

                    isLoading2: false,
                    dataSource2,

                    isLoading3: false,
                    dataSource3,

                    isLoading4: false,
                    dataSource4,

                    isLoading5: false,
                    dataSource5,
                });
            })
            .catch((error) => {
                console.log(error)
            });

    }

    // This function is used not to call this piece of code several times each time
    _renderItem = ({item, index}) => {
        return (
            <View>
                <Card>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Divider />
                    <View style={styles.user}>
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
                    </View>

                    <Card.Divider />
                </Card>
            </View>
        )
    }

    render() {
        let { dataSource1, dataSource2, dataSource3, dataSource4, dataSource5} = this.state
        if (this.state.isLoading1 || this.state.isLoading2 || this.state.isLoading3 || this.state.isLoading4 || this.state.isLoading5) {
            // Allows you to have a loading image to see if an API is still loading
            return (
                <View>
                    <ActivityIndicator />
                </View>
            )
        } else {
            return (
                <View>
                    <Text style={styles.textCenter}>{this.state.total} jeux dans le monde</Text>

                    {/* I call _renderItem and I increase the performance with Flatlist */}
                    <FlatList
                        data={dataSource1}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <FlatList
                        data={dataSource2}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <FlatList
                        data={dataSource3}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <FlatList
                        data={dataSource4}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <FlatList
                        data={dataSource5}
                        renderItem={this._renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
            </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7fffd4',
        padding: 10,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    card: {
        flex: 1,
        alignSelf: 'stretch',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },

    textCenter: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 18,
        color: 'red',
        marginTop: 10,
    },

});



