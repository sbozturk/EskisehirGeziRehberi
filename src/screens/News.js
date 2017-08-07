import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Dunya from './news/Dunya';
import Eglence from './news/Eglence';
import Ekonomi from './news/Ekonomi';
import Gundem from './news/Gundem';
import Magazin from './news/Magazin';
import Siyaset from './news/Siyaset';
import Spor from './news/Spor';
import Teknoloji from './news/Teknoloji';


const News = React.createClass({
    render() {
        const {navigate} = this.props.navigation;

        return ( <View style={rowStyle.container}>
                <View style={columnStyle.container}>
                    <TouchableOpacity
                        style={buttonStyle.buttonGundem}
                        onPress={() => navigate('Gundem')}
                    >
                        <Text style={buttonStyle.buttonText}>Gündem</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={buttonStyle.buttonSpor}
                        onPress={() => navigate('Spor')}
                    >
                        <Text style={buttonStyle.buttonText}>Spor</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={buttonStyle.buttonMagazin}
                        onPress={() => navigate('Magazin')}
                    >
                        <Text style={buttonStyle.buttonText}>Magazin</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={buttonStyle.buttonEkonomi}
                        onPress={() => navigate('Ekonomi')}
                    >
                        <Text style={buttonStyle.buttonText}>Ekonomi</Text>
                    </TouchableOpacity>
                </View>

                <View style={columnStyle.container}>
                    <TouchableOpacity
                        style={buttonStyle.buttonSiyaset}
                        onPress={() => navigate('Siyaset')}
                    >
                        <Text style={buttonStyle.buttonText}>Siyaset</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={buttonStyle.buttonTeknoloji}
                        onPress={() => navigate('Teknoloji')}
                    >
                        <Text style={buttonStyle.buttonText}>Teknoloji</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={buttonStyle.buttonEglence}
                        onPress={() => navigate('Eglence')}
                    >
                        <Text style={buttonStyle.buttonText}>Eğlence</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={buttonStyle.buttonDunya}
                        onPress={() => navigate('Dunya')}
                    >
                        <Text style={buttonStyle.buttonText}>Dünya</Text>
                    </TouchableOpacity>
                </View>

            </View>



        );
    },
});

const App = StackNavigator({
    News: {screen: News},
    Dunya: {screen: Dunya},
    Eglence: {screen: Eglence},
    Ekonomi: {screen: Ekonomi},
    Gundem: {screen: Gundem},
    Magazin: {screen: Magazin},
    Siyaset: {screen: Siyaset},
    Spor: {screen: Spor},
    Teknoloji: {screen: Teknoloji},
},
{
    headerMode: 'none',
}
);

const rowStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff'
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

    buttonGundem: {
        backgroundColor: '#00b0ff',
        height: '22%',
        width: '90%',
        marginBottom: 20,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100 / 10,
    },

    buttonSpor: {
        backgroundColor: '#ff6f00',
        height: '22%',
        width: '90%',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100 / 10,
    },

    buttonMagazin: {
        backgroundColor: '#00b0ff',
        height: '22%',
        width: '90%',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100 / 10,
    },

    buttonEkonomi: {
        backgroundColor: '#ff6f00',
        height: '22%',
        width: '90%',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100 / 10,
    },

    buttonSiyaset: {
        backgroundColor: '#ff6f00',
        height: '22%',
        width: '90%',
        marginBottom: 20,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100 / 10,
    },

    buttonTeknoloji: {
        backgroundColor: '#00b0ff',
        height: '22%',
        width: '90%',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100 / 10,
    },

    buttonEglence: {
        backgroundColor: '#ff6f00',
        height: '22%',
        width: '90%',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100 / 10,
    },

    buttonDunya: {
        backgroundColor: '#00b0ff',
        height: '22%',
        width: '90%',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100 / 10,
    },

    buttonText: {
        textAlign: 'center',
        fontSize: 32,
        color: 'white',
    },
});


export default App;
