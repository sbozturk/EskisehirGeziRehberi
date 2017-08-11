import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Pharmacy from './screens/Pharmacy';
import PhoneNumbers from './screens/PhoneNumbers';
import Tramvay from './screens/Tramvay';
import Travel from './screens/Travel';
import Weather from './screens/Weather';
import News from './screens/News';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Eskişehir Gezi Rehberi',
    };

    render() {
        const {navigate} = this.props.navigation;

        return (<Image
                  style={{flex:1, resizeMode: 'stretch', width: '100%'}}
                  source={require('./assets/background.png')}
                >
                <View style={rowStyle.container}>
                <View style={columnStyle.container}>
                <TouchableOpacity
                    style={buttonStyle.button}
                    onPress={() => navigate('Weather')}
                >
                    <Text style={buttonStyle.buttonText}>Hava Durumu</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={buttonStyle.button}
                    onPress={() => navigate('Tramvay')}
                >
                    <Text style={buttonStyle.buttonText}>Tramvay</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={buttonStyle.button}
                    onPress={() => navigate('Pharmacy')}
                >
                    <Text style={buttonStyle.buttonText}>Nöbetçi Eczaneler</Text>
                </TouchableOpacity>
            </View>

            <View style={columnStyle.container}>
                <TouchableOpacity
                    style={buttonStyle.button}
                    onPress={() => navigate('Travel')}
                >
                    <Text style={buttonStyle.buttonText}>Gezilecek Yerler</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={buttonStyle.button}
                    onPress={() => navigate('News')}
                >
                    <Text style={buttonStyle.buttonText}>Haberler</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={buttonStyle.button}
                    onPress={() => navigate('PhoneNumbers')}
                >
                    <Text style={buttonStyle.buttonText}>Acil Numaralar</Text>
                </TouchableOpacity>
                </View>
                </View>
                </Image>
        );
    }
}

const App = StackNavigator({
    Home: {screen: HomeScreen},
    Weather: {screen: Weather},
    Travel: {screen: Travel},
    Tramvay: {screen: Tramvay},
    News: {screen: News},
    Pharmacy: {screen: Pharmacy},
    PhoneNumbers: {screen: PhoneNumbers},
});

export default App;

const rowStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

const columnStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
});

const buttonStyle = StyleSheet.create({

    button: {
        backgroundColor: 'transparent',
        height: '33.5%',
        width: '100%',
        borderColor: '#fff',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
    },
});
