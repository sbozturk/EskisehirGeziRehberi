import React, {Component} from 'react';
import {StyleSheet, ListView, Text, View, Image, TouchableOpacity} from 'react-native';
import Communications from 'react-native-communications';

var REQUEST_URL = 'https://esgazete-api.herokuapp.com/esgazete/world';

class Dunya extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2, row3) => row1 !== row2 !== row3,
            }),
            loaded: false,
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData),
                    loaded: true,
                });
            })
            .done();
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderNews}
                style={styles.listView}
            />
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Haberler yükleniyor...
                </Text>
            </View>
        );
    }

    renderNews(news) {
        return (
            <TouchableOpacity onPress={() => Communications.web(news.url)}>
                <View style={styles.container}>
                    <Image
                        source={{uri: news.picUrl}}
                        style={styles.thumbnail}
                    />
                    <Text style={styles.title}>{news.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 50,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        fontWeight: 'bold',
    },
    thumbnail: {
        width: '100%',
        height: 150,
    },
});

export default Dunya;
