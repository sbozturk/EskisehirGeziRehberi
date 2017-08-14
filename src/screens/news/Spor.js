import React, {Component} from 'react';
import {Alert, ActivityIndicator, ListView, Text, View, Image, TouchableOpacity} from 'react-native';
import Communications from 'react-native-communications';
import Constant from "../../util/Constant";
import Styles from "../../util/Styles";

const InternetAlert = () => {
    const showAlert = () => {
        Alert.alert(
            'Bağlantı Hatası',
            'Bağlantı sırasında bir hata ile karşılaşıldı.',
            [
                {text: 'TAMAM', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false}
        )
    };
    return (
        <View
            style={{
                paddingTop: 10,
                flex: 1,
                backgroundColor: 'white',
            }}
        >
            {showAlert()}
        </View>
    );
};

class Spor extends Component {
    static navigationOptions = {
        title: 'Spor',
    };

    constructor(props) {
        super(props);
        this.state = {
            internetConnection: true,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2, row3) => row1 !== row2 !== row3,
            }),
            loaded: false,
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(Constant.REQUEST_URL_SPOR)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData),
                    loaded: true,
                });
            }).catch(error => {
            this.setState({internetConnection: false});
        })
    }

    render() {
        if (!this.state.internetConnection) {
            return InternetAlert();
        } else {
            if (!this.state.loaded) {
                return Spor.renderLoadingView();
            }

            return (
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderNews}
                    style={Styles.stylesNewsDetail.listView}
                />
            );
        }
    }

    static renderLoadingView() {
        return (
            <Image
                style={{flex: 1, resizeMode: 'stretch', width: '100%'}}
                source={require('../../assets/background.png')}
            >
                <View
                    style={{
                        paddingTop: 10,
                        flex: 1,
                        backgroundColor: 'transparent',
                    }}
                >
                    <ActivityIndicator
                        style={[Styles.stylesNewsDetail.centering, {height: 80}]}
                        size="large"
                        color='white'/>
                </View>
            </Image>
        );
    }

    renderNews(news) {
        return (
            <TouchableOpacity onPress={() => Communications.web(news.url)}>
                <View style={Styles.stylesNewsDetail.container}>
                    <Image
                        source={{uri: news.picUrl}}
                        style={Styles.stylesNewsDetail.thumbnail}
                    />
                    <Text style={Styles.stylesNewsDetail.title}>{news.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default Spor;