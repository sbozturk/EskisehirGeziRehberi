import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Odunpazari from './pharmacy/Odunpazari';
import Tepebasi from './pharmacy/Tepebasi';

class Pharmacy extends React.Component {
    static navigationOptions = {
        title: 'Nöbetçi Eczaneler',
    };

    render() {
        const {navigate} = this.props.navigation;

        return ( <View style={columnStyle.container}>

                <TouchableOpacity
                    style={buttonStyle.buttonTepebasi}
                    onPress={() => navigate('Tepebasi')}
                >
                    <Text style={buttonStyle.buttonText}>Tepebaşı</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={buttonStyle.buttonOdunpazari}
                    onPress={() => navigate('Odunpazari')}
                >
                    <Text style={buttonStyle.buttonText}>Odunpazarı</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const App = StackNavigator({
        Pharmacy: {screen: Pharmacy},
        Odunpazari: {screen: Odunpazari},
        Tepebasi: {screen: Tepebasi},
    },
    {
        headerMode: 'none',
    }
);

const columnStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

const buttonStyle = StyleSheet.create({

    buttonOdunpazari: {
        backgroundColor: '#00b0ff',
        height: '50%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonTepebasi: {
        backgroundColor: '#ff6f00',
        height: '50%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        textAlign: 'center',
        fontSize: 56, // this is 16 points
        color: 'white',
    },
});


export default App;
