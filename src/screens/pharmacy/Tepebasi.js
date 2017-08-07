import React, {Component} from 'react';
import {StyleSheet, ListView, Text, View} from 'react-native';

var REQUEST_URL = 'https://eskisehir-nobetci-eczaneler.herokuapp.com/nobetcitepebasi';

class Tepebasi extends Component {
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
                renderRow={this.renderPharmancy}
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
    renderPharmancy(pharmancy) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{pharmancy.name}</Text>
                <Text>{pharmancy.address}</Text>
                <Text>{pharmancy.name.telephone}</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        fontWeight: 'bold',
    },
});


export default Tepebasi;
