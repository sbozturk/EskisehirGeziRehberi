import React, {Component} from 'react';
import {StyleSheet, ListView, Text, View, Image} from 'react-native';

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
                    Nöbetçi eczaneler yükleniyor...
                </Text>
            </View>
        );
    }

    /*TODO: FIX UI*/
    renderNews(news) {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: news.picUrl}}
                    style={styles.thumbnail}
                />
                <Text style={styles.title}>{news.title}</Text>
                <Text style={styles.link}>{news.url}</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 150,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        marginTop: 8,
        marginLeft: 30,
        marginRight: 20,
        fontWeight: 'bold',
    },
    thumbnail: {
        width: '100%',
        height: '100%',
    },
    link: {
        marginBottom: 20,
        marginTop: 8,
        marginLeft: 30,
        marginRight: 20
    }
});


export default Dunya;
