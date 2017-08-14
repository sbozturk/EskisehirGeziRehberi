import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Dunya from './news/Dunya';
import Eglence from './news/Eglence';
import Ekonomi from './news/Ekonomi';
import Gundem from './news/Gundem';
import Magazin from './news/Magazin';
import Siyaset from './news/Siyaset';
import Spor from './news/Spor';
import Teknoloji from './news/Teknoloji';
import Styles from "../util/Styles";

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
                <View style={Styles.styleNews.containerRow}>
                    <View style={Styles.styleNews.containerColumn}>
                        <TouchableOpacity
                            style={Styles.styleNews.buttonNews}
                            onPress={() => navigate('Gundem')}
                        >
                            <Text style={Styles.styleNews.buttonText}>Gündem</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={Styles.styleNews.buttonNews}
                            onPress={() => navigate('Spor')}
                        >
                            <Text style={Styles.styleNews.buttonText}>Spor</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={Styles.styleNews.buttonNews}
                            onPress={() => navigate('Magazin')}
                        >
                            <Text style={Styles.styleNews.buttonText}>Magazin</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={Styles.styleNews.buttonNews}
                            onPress={() => navigate('Ekonomi')}
                        >
                            <Text style={Styles.styleNews.buttonText}>Ekonomi</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={Styles.styleNews.containerColumn}>
                        <TouchableOpacity
                            style={Styles.styleNews.buttonNews}
                            onPress={() => navigate('Siyaset')}
                        >
                            <Text style={Styles.styleNews.buttonText}>Siyaset</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={Styles.styleNews.buttonNews}
                            onPress={() => navigate('Teknoloji')}
                        >
                            <Text style={Styles.styleNews.buttonText}>Teknoloji</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={Styles.styleNews.buttonNews}
                            onPress={() => navigate('Eglence')}
                        >
                            <Text style={Styles.styleNews.buttonText}>Eğlence</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={Styles.styleNews.buttonNews}
                            onPress={() => navigate('Dunya')}
                        >
                            <Text style={Styles.styleNews.buttonText}>Dünya</Text>
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

export default App;
