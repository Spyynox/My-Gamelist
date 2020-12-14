import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import HomeAll from './HomeAll';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    
                    <TouchableOpacity onPress={() =>// Allows you to change page from an image
                        this.props.navigation.navigate('Atlus')
                    }>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={{ uri: "https://cdn-uploads.gameblog.fr/images/actu/1280/91379_gb_news.jpg?ver=1593708553" }}
                            resizeMode='contain'

                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate('Top')
                    }>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={{ uri: "https://lepetitjournal.com/sites/default/files/styles/main_article/public/2019-12/Photo%20LPJ%2842%29.jpg?itok=eTvz1UNM" }}
                            resizeMode='contain'
                            
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate('Top2019')
                    }>
                        <Text>2019</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate('Top2018')
                    }>
                        <Text>2018</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate('Top2017')
                    }>
                        <Text>2017</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate('Top2016')
                    }>
                        <Text>2016</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate('Top2015')
                    }>
                        <Text>2015</Text>
                    </TouchableOpacity>

                </View>
                <HomeAll/>
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