import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, ListView, Text, View, Image, TouchableOpacity} from 'react-native';
import Communications from 'react-native-communications';

const REQUEST_URL = 'https://esgazete-api.herokuapp.com/esgazete/technology';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 50,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    thumbnail: {
        width: '100%',
        height: 150,
    },
});

class Teknoloji extends Component {
    static navigationOptions = {
        title: 'Teknoloji',
    };

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
            return Teknoloji.renderLoadingView();
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderNews}
                style={styles.listView}
            />
        );
    }

    static renderLoadingView() {
        return (
            <View
                style={{
                    paddingTop: 10,
                    flex: 1,
                    backgroundColor: 'white',
                }}
            >
                <ActivityIndicator/>
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

export default Teknoloji;
