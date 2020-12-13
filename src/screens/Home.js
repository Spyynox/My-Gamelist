import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, ScrollView, Button, Text } from 'react-native';
import HomeAll from './HomeAll';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    
                    <TouchableOpacity onPress={() =>//Permet de changer de page à partir d'une image
                        this.props.navigation.navigate('Home')
                    }>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={{ uri: "https://cdn-uploads.gameblog.fr/images/actu/1280/91379_gb_news.jpg?ver=1593708553" }}
                            resizeMode='contain'

                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate('Home')
                    }>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={{ uri: "https://www.pdvg.it/wp-content/uploads/2020/02/CD-Projekt-Red-PDV.png" }}
                            resizeMode='contain'

                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate('Top')
                    }>
                        {/* <Image
                            style={{ width: 50, height: 50 }}
                            source={{ uri: "https://lepetitjournal.com/sites/default/files/styles/main_article/public/2019-12/Photo%20LPJ%2842%29.jpg?itok=eTvz1UNM" }}
                            resizeMode='contain'
                            
                        /> */}
                        <View>
                            <Button
                                title="Dropdown"
                                color="#841584"
                            />
                            <Text>Link 1</Text>
                            <Text>Link 2</Text>
                            <Text>Link 3</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView /*Permet Scroll le fichier HomeAll.js */> 
                    <HomeAll/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7fffd4',
        padding: 10,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    item: {
        flex: 1,
        alignSelf: 'stretch',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
})