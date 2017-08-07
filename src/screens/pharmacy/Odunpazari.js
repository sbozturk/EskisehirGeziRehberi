import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, ListView, Text, View} from 'react-native';

class Odunpazari extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        return fetch('https://eskisehir-nobetci-eczaneler.herokuapp.com/nobetciodunpazari')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2, r3) => r1 !== r2 !== r3});
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson),
                }, function () {
                    // do something with new state
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator/>
                </View>
            );
        }

        return (
            <View style={{flex: 1, paddingTop: 20}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData.name}, {rowData.address}, {rowData.telephone}</Text>}
                />
            </View>
        );
    }
}

export default Odunpazari;
