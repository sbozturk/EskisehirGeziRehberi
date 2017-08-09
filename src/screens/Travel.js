import React, {Component} from 'react';
import { WebView } from 'react-native';

class Travel extends Component {
    static navigationOptions = {
        title: 'Gezilecek Yerler',
    };

    render() {
        return (
            <WebView
                source={{uri: 'https://www.tripadvisor.com.tr/Attractions-g319806-Activities-Eskisehir_Eskisehir_Province.html'}}
                style={{marginTop: -116}}
            />
        );
    }
}

export default Travel;
