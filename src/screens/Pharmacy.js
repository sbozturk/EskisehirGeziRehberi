import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
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

        return (

            <Image
                style={{flex: 1, resizeMode: 'stretch', width: '100%'}}
                source={require('../assets/background.png')}
            >

                <View style={columnStyle.container}>

                    <TouchableOpacity
                        style={buttonStyle.button}
                        onPress={() => navigate('Tepebasi')}
                    >
                        <Text style={buttonStyle.buttonText}>Tepebaşı</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={buttonStyle.button}
                        onPress={() => navigate('Odunpazari')}
                    >
                        <Text style={buttonStyle.buttonText}>Odunpazarı</Text>
                    </TouchableOpacity>
                </View>

            </Image>
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

    button: {
        backgroundColor: 'transparent',
        height: '50%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff',
        borderWidth: 2,
    },

    buttonText: {
        textAlign: 'center',
        fontSize: 56,
        color: 'white',
    },
});


export default App;
