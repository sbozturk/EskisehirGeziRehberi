import React, {Component} from 'react';
import {TouchableOpacity, ActivityIndicator, StyleSheet, ListView, Text, View} from 'react-native';
import Communications from 'react-native-communications';

var REQUEST_URL = 'https://eskisehir-nobetci-eczaneler.herokuapp.com/nobetciodunpazari';

class Odunpazari extends Component {
    static navigationOptions = {
        title: 'Odunpazarı Nöbetçi Eczaneler',
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
            return this.renderLoadingView();
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderPharmancy}
                style={odunpazariStyle.listView}
            />
        );
    }

    renderLoadingView() {
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

    renderPharmancy(pharmancy) {
        return (
            <View style={odunpazariStyle.container}>
                <TouchableOpacity onPress={() => Communications.web('https://www.google.com.tr/maps/place/' + pharmancy.address)}>
                    <Text style={odunpazariStyle.title}>{pharmancy.name}</Text>
                    <Text style={odunpazariStyle.text}>{pharmancy.address}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Communications.phonecall(pharmancy.telephone, true)}>
                    <Text style={odunpazariStyle.text}>{pharmancy.telephone}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

var odunpazariStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    listView: {
        backgroundColor: '#fff',
    },

    title: {
        fontSize: 16,
        marginBottom: 8,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 30,
        fontWeight: 'bold',
    },

    text: {
        marginRight: 20,
        marginLeft: 30,
    }
});


export default Odunpazari;