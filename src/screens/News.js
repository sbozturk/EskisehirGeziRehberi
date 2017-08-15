import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {StackNavigator} from 'react-navigation';
import NewsDetail from './NewsDetail';
import Constant from "../util/Constant";
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
                            onPress={() => navigate('NewsDetail', {title: 'Gündem', REQUEST_URL: Constant.REQUEST_URL_GUNDEM})}
                        >
                            <Text style={Styles.styleNews.buttonText}>Gündem</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={Styles.styleNews.buttonNews}
                            onPress={() => navigate('NewsDetail', {title: 'Spor', REQUEST_URL: Constant.REQUEST_URL_SPOR})}
                        >
                            <Text style={Styles.styleNews.buttonText}>Spor</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={Styles.styleNews.buttonNews}
                            onPress={() => navigate('NewsDetail', {title: 'Magazin', REQUEST_URL: Constant.REQUEST_URL_MAGAZIN})}
                        >
                            <Text style={Styles.styleNews.buttonText}>Magazin</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={Styles.styleNews.buttonNews}
                            onPress={() => navigate('NewsDetail', {title: 'Ekonomi', REQUEST_URL: Constant.REQUEST_URL_EKONOMI})}
                        >
                            <Text style={Styles.styleNews.buttonText}>Ekonomi</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={Styles.styleNews.containerColumn}>
                        <TouchableOpacity
                            style={Styles.styleNews.buttonNews}
                            onPress={() => navigate('NewsDetail', {title: 'Siyaset', REQUEST_URL: Constant.REQUEST_URL_SIYASET})}
                        >
                            <Text style={Styles.styleNews.buttonText}>Siyaset</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={Styles.styleNews.buttonNews}
                            onPress={() => navigate('NewsDetail', {title: 'Teknoloji', REQUEST_URL: Constant.REQUEST_URL_TEKNOLOJI})}
                        >
                            <Text style={Styles.styleNews.buttonText}>Teknoloji</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={Styles.styleNews.buttonNews}
                            onPress={() => navigate('NewsDetail', {title: 'Eğlence', REQUEST_URL: Constant.REQUEST_URL_EGLENCE})}
                        >
                            <Text style={Styles.styleNews.buttonText}>Eğlence</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={Styles.styleNews.buttonNews}
                            onPress={() => navigate('NewsDetail', {title: 'Dünya', REQUEST_URL: Constant.REQUEST_URL_DUNYA})}
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
        NewsDetail: {screen: NewsDetail},
    },
    {
        headerMode: 'none',
    }
);

export default App;
