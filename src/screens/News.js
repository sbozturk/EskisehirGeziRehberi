import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
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

class News extends React.Component {
    static navigationOptions = {
        title: 'Haberler',
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <Image
                style={{flex: 1, resizeMode: 'stretch', width: '100%'}}
                source={require('../assets/background.png')}
            >
                <View style={rowStyle.container}>
                    <View style={columnStyle.container}>
                        <TouchableOpacity
                            style={buttonStyle.buttonNews}
                            onPress={() => navigate('Gundem')}
                        >
                            <Text style={buttonStyle.buttonText}>Gündem</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={buttonStyle.buttonNews}
                            onPress={() => navigate('Spor')}
                        >
                            <Text style={buttonStyle.buttonText}>Spor</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={buttonStyle.buttonNews}
                            onPress={() => navigate('Magazin')}
                        >
                            <Text style={buttonStyle.buttonText}>Magazin</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={buttonStyle.buttonNews}
                            onPress={() => navigate('Ekonomi')}
                        >
                            <Text style={buttonStyle.buttonText}>Ekonomi</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={columnStyle.container}>
                        <TouchableOpacity
                            style={buttonStyle.buttonNews}
                            onPress={() => navigate('Siyaset')}
                        >
                            <Text style={buttonStyle.buttonText}>Siyaset</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={buttonStyle.buttonNews}
                            onPress={() => navigate('Teknoloji')}
                        >
                            <Text style={buttonStyle.buttonText}>Teknoloji</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={buttonStyle.buttonNews}
                            onPress={() => navigate('Eglence')}
                        >
                            <Text style={buttonStyle.buttonText}>Eğlence</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={buttonStyle.buttonNews}
                            onPress={() => navigate('Dunya')}
                        >
                            <Text style={buttonStyle.buttonText}>Dünya</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </Image>



        );
    }
}

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

    buttonNews: {
        height: '25%',
        width: '100%',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff',
        borderWidth: 2,
    },

    buttonText: {
        textAlign: 'center',
        fontSize: 32,
        color: '#fff',
    },
});


export default App;
