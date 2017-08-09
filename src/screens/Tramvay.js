import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import {StackNavigator} from 'react-navigation';

 let imgRequire;

class Tramvay extends React.Component {
    static navigationOptions = {
        title: 'Tramvay',
    };

    render() {
        const {navigate} = this.props.navigation;

        return ( <View style={rowStyle.container}>
                <View style={columnStyle.container}>
                    <TouchableOpacity
                        style={buttonStyle.buttonBlue}
                        onPress={() => {
                            imgRequire = require('../assets/tramvay/a.jpg');
                            navigate('TramvaySaat')
                        }}
                    >
                        <Text style={buttonStyle.buttonText}>SSK OTOGAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={buttonStyle.buttonOrange}
                        onPress={() => {
                            imgRequire = require('../assets/tramvay/c.jpg');
                            navigate('TramvaySaat')
                        }}
                    >
                        <Text style={buttonStyle.buttonText}>OSMANGAZİ SSK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={buttonStyle.buttonBlue}
                        onPress={() => {
                            imgRequire = require('../assets/tramvay/e.jpg');
                            navigate('TramvaySaat')
                        }}
                    >
                        <Text style={buttonStyle.buttonText}>OSMANGAZİ OTOGAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={buttonStyle.buttonOrange}
                        onPress={() => {
                            imgRequire = require('../assets/tramvay/g.jpg');
                            navigate('TramvaySaat')
                        }}
                    >
                        <Text style={buttonStyle.buttonText}>EMEK/71 EVLER OPERA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={buttonStyle.buttonBlue}
                        onPress={() => {
                            imgRequire = require('../assets/tramvay/i.jpg');
                            navigate('TramvaySaat')
                        }}
                    >
                        <Text style={buttonStyle.buttonText}>SSK BATIKENT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={buttonStyle.buttonOrange}
                        onPress={() => {
                            imgRequire = require('../assets/tramvay/k.jpg');
                            navigate('TramvaySaat')
                        }}
                    >
                        <Text style={buttonStyle.buttonText}>SSK ÇAMLICA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={buttonStyle.buttonBlue}
                        onPress={() => {
                            imgRequire = require('../assets/tramvay/m.jpg');
                            navigate('TramvaySaat')
                        }}
                    >
                        <Text style={buttonStyle.buttonText}>OGÜ ÇANKAYA</Text>
                    </TouchableOpacity>
                </View>

                <View style={columnStyle.container}>
                    <TouchableOpacity
                        style={buttonStyle.buttonBlue}
                        onPress={() => {
                            imgRequire = require('../assets/tramvay/b.jpg');
                            navigate('TramvaySaat')
                        }}
                    >
                        <Text style={buttonStyle.buttonText}>OTOGAR SSK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={buttonStyle.buttonOrange}
                        onPress={() => {
                            imgRequire = require('../assets/tramvay/d.jpg');
                            navigate('TramvaySaat')
                        }}
                    >
                        <Text style={buttonStyle.buttonText}>SSK OSMANGAZİ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={buttonStyle.buttonBlue}
                        onPress={() => {
                            imgRequire = require('../assets/tramvay/f.jpg');
                            navigate('TramvaySaat')
                        }}
                    >
                        <Text style={buttonStyle.buttonText}>OTOGAR OSMANGAZİ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={buttonStyle.buttonOrange}
                        onPress={() => {
                            imgRequire = require('../assets/tramvay/h.jpg');
                            navigate('TramvaySaat')
                        }}
                    >
                        <Text style={buttonStyle.buttonText}>OPERA EMEK/71 EVLER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={buttonStyle.buttonBlue}
                        onPress={() => {
                            imgRequire = require('../assets/tramvay/j.jpg');
                            navigate('TramvaySaat')
                        }}
                    >
                        <Text style={buttonStyle.buttonText}>BATIKENT SSK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={buttonStyle.buttonOrange}
                        onPress={() => {
                            imgRequire = require('../assets/tramvay/l.jpg');
                            navigate('TramvaySaat')
                        }}
                    >
                        <Text style={buttonStyle.buttonText}>ÇAMLICA SSK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={buttonStyle.buttonBlue}
                        onPress={() => {
                            imgRequire = require('../assets/tramvay/n.jpg');
                            navigate('TramvaySaat')
                        }}
                    >
                        <Text style={buttonStyle.buttonText}>ÇANKAYA OGÜ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

class TramvaySaat extends Component {
    static navigationOptions = {
        title: 'Tramvay',
    };

    render() {
        return (
            <View>
                <Image
                    style={imgStyle.img}
                    source={imgRequire}
                />
            </View>
        );
    }
}

const App = StackNavigator({
        Tramvay: {screen: Tramvay},
        TramvaySaat: {screen: TramvaySaat},
    },
    {
        headerMode: 'none',
    }
);

const imgStyle = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%',
    },
});

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

    buttonBlue: {
        backgroundColor: '#00b0ff',
        height: '10%',
        width: '90%',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100 / 10,
    },

    buttonOrange: {
        backgroundColor: '#ff6f00',
        height: '10%',
        width: '90%',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100 / 10,
    },

    buttonText: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
    },
});


export default App;
