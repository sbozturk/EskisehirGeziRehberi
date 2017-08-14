import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Styles from "../util/Styles";

let imgRequire;

class Tramvay extends React.Component {
    static navigationOptions = {
        title: 'Tramvay',
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <Image
                style={{flex: 1, resizeMode: 'stretch', width: '100%'}}
                source={require('../assets/background.png')}
            >
                <View style={Styles.styleTramvay.containerRow}>
                    <View style={Styles.styleTramvay.containerColumn}>
                        <TouchableOpacity
                            style={Styles.styleTramvay.button}
                            onPress={() => {
                                imgRequire = require('../assets/tramvay/a.jpg');
                                navigate('TramvaySaat')
                            }}
                        >
                            <Text style={Styles.styleTramvay.buttonText}>SSK OTOGAR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={Styles.styleTramvay.button}
                            onPress={() => {
                                imgRequire = require('../assets/tramvay/c.jpg');
                                navigate('TramvaySaat')
                            }}
                        >
                            <Text style={Styles.styleTramvay.buttonText}>OSMANGAZİ SSK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={Styles.styleTramvay.button}
                            onPress={() => {
                                imgRequire = require('../assets/tramvay/e.jpg');
                                navigate('TramvaySaat')
                            }}
                        >
                            <Text style={Styles.styleTramvay.buttonText}>OSMANGAZİ OTOGAR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={Styles.styleTramvay.button}
                            onPress={() => {
                                imgRequire = require('../assets/tramvay/g.jpg');
                                navigate('TramvaySaat')
                            }}
                        >
                            <Text style={Styles.styleTramvay.buttonText}>EMEK/71 EVLER</Text>
                            <Text style={Styles.styleTramvay.buttonText}>OPERA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={Styles.styleTramvay.button}
                            onPress={() => {
                                imgRequire = require('../assets/tramvay/i.jpg');
                                navigate('TramvaySaat')
                            }}
                        >
                            <Text style={Styles.styleTramvay.buttonText}>SSK BATIKENT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={Styles.styleTramvay.button}
                            onPress={() => {
                                imgRequire = require('../assets/tramvay/k.jpg');
                                navigate('TramvaySaat')
                            }}
                        >
                            <Text style={Styles.styleTramvay.buttonText}>SSK ÇAMLICA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={Styles.styleTramvay.button}
                            onPress={() => {
                                imgRequire = require('../assets/tramvay/m.jpg');
                                navigate('TramvaySaat')
                            }}
                        >
                            <Text style={Styles.styleTramvay.buttonText}>OGÜ ÇANKAYA</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={Styles.styleTramvay.containerColumn}>
                        <TouchableOpacity
                            style={Styles.styleTramvay.button}
                            onPress={() => {
                                imgRequire = require('../assets/tramvay/b.jpg');
                                navigate('TramvaySaat')
                            }}
                        >
                            <Text style={Styles.styleTramvay.buttonText}>OTOGAR SSK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={Styles.styleTramvay.button}
                            onPress={() => {
                                imgRequire = require('../assets/tramvay/d.jpg');
                                navigate('TramvaySaat')
                            }}
                        >
                            <Text style={Styles.styleTramvay.buttonText}>SSK OSMANGAZİ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={Styles.styleTramvay.button}
                            onPress={() => {
                                imgRequire = require('../assets/tramvay/f.jpg');
                                navigate('TramvaySaat')
                            }}
                        >
                            <Text style={Styles.styleTramvay.buttonText}>OTOGAR OSMANGAZİ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={Styles.styleTramvay.button}
                            onPress={() => {
                                imgRequire = require('../assets/tramvay/h.jpg');
                                navigate('TramvaySaat')
                            }}
                        >
                            <Text style={Styles.styleTramvay.buttonText}>OPERA</Text>
                            <Text style={Styles.styleTramvay.buttonText}>EMEK/71 EVLER</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={Styles.styleTramvay.button}
                            onPress={() => {
                                imgRequire = require('../assets/tramvay/j.jpg');
                                navigate('TramvaySaat')
                            }}
                        >
                            <Text style={Styles.styleTramvay.buttonText}>BATIKENT SSK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={Styles.styleTramvay.button}
                            onPress={() => {
                                imgRequire = require('../assets/tramvay/l.jpg');
                                navigate('TramvaySaat')
                            }}
                        >
                            <Text style={Styles.styleTramvay.buttonText}>ÇAMLICA SSK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={Styles.styleTramvay.button}
                            onPress={() => {
                                imgRequire = require('../assets/tramvay/n.jpg');
                                navigate('TramvaySaat')
                            }}
                        >
                            <Text style={Styles.styleTramvay.buttonText}>ÇANKAYA OGÜ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Image>
        );
    }
}

class TramvaySaat extends Component {
    static navigationOptions = {
        title: 'Tramvay',
    };

    render() {
        return (
            <View style={Styles.styleTramvay.containerImg}>
                <Image
                    style={Styles.styleTramvay.img}
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

export default App;
