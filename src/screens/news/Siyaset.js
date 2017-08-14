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

class Siyaset extends Component {
    static navigationOptions = {
        title: 'Siyaset',
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
        fetch(Constant.REQUEST_URL_SIYASET)
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
                return Siyaset.renderLoadingView();
            }

            return (
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderNews}
                    style={Styles.styleNewsDetail.listView}
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
                        style={[Styles.styleNewsDetail.centering, {height: 80}]}
                        size="large"
                        color='white'/>
                </View>
            </Image>
        );
    }

    renderNews(news) {
        return (
            <TouchableOpacity onPress={() => Communications.web(news.url)}>
                <View style={Styles.styleNewsDetail.container}>
                    <Image
                        source={{uri: news.picUrl}}
                        style={Styles.styleNewsDetail.thumbnail}
                    />
                    <Text style={Styles.styleNewsDetail.title}>{news.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default Siyaset;