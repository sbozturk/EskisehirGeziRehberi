import React, {Component} from 'react';
import {Tile, List, ListItem, Button, Text} from 'react-native-elements';

class Travel extends Component {
    static navigationOptions = {
        title: 'Gezilecek Yerler',
    };

    render() {
        return (
            <Text> Gezilecek Yerler </Text>
        );
    }
}

export default Travel;
