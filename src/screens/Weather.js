import React, {Component} from 'react';
import {Alert, ActivityIndicator, View, Image} from 'react-native';
import {ListItem} from 'react-native-elements';
import Constant from "../util/Constant";
import Styles from "../util/Styles";

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

class Weather extends Component {
    static navigationOptions = {
        title: 'Hava Durumu',
    };

    constructor(props) {
        super(props);
        this.state = {
            internetConnection: true,
            isLoading: true,
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch(Constant.REQUEST_URL_WEATHER)
            .then(res => res.json())
            .then(responseData => {
                this.setState({
                    isLoading: false,
                    city: {
                        name: responseData.list[0].name,
                        weather: responseData.list[0].weather[0].main,
                        temp: responseData.list[0].main.temp,
                        temp_min: responseData.list[0].main.temp_min,
                        temp_max: responseData.list[0].main.temp_max,
                        humidity: responseData.list[0].main.humidity,
                        pressure: responseData.list[0].main.pressure,
                        wind_speed: responseData.list[0].wind.speed,
                        cloudiness: responseData.list[0].clouds.all,
                        icon: 'https://openweathermap.org/img/w/' + responseData.list[0].weather[0].icon + '.png',
                    },
                });
            }).catch(error => {
            this.setState({internetConnection: false});
        })
    }

    render() {
        if (!this.state.internetConnection) {
            return InternetAlert();
        } else {
            if (this.state.isLoading) {
                return <LoadingIndicator/>;
            }
            return (
                <View style={{flex: 1, backgroundColor: 'white'}}>
                    <ListItem
                        title={this.state.city.weather}
                        avatar={{uri: this.state.city.icon}}
                        badge={{
                            value: this.state.city.temp + ' °C',
                            badgeContainerStyle: {
                                backgroundColor: 'lightblue',
                            },
                        }}
                        hideChevron
                    />
                    <ListItem
                        title="Nem"
                        rightTitle={'%' + this.state.city.humidity}
                        hideChevron
                    />
                    <ListItem
                        title="Basınç"
                        rightTitle={this.state.city.pressure + ' hPa'}
                        hideChevron
                    />
                    <ListItem
                        title="Rüzgar Hızı"
                        rightTitle={this.state.city.wind_speed + ' m/s'}
                        hideChevron
                    />
                    <ListItem
                        title="Bulut Örtüsü"
                        rightTitle={'%' + this.state.city.cloudiness}
                        hideChevron
                    />
                    <Image
                        style={{flex: 1, resizeMode: 'stretch', width: '100%'}}
                        source={require('../assets/eskisehir.png')}
                    />
                </View>
            );
        }
    }
}

class LoadingIndicator extends Component {
    render() {
        return (
            <Image
                style={{flex: 1, resizeMode: 'stretch', width: '100%'}}
                source={require('../assets/background.png')}
            >
                <View
                    style={{
                        paddingTop: 10,
                        flex: 1,
                        backgroundColor: 'transparent',
                    }}
                >
                    <ActivityIndicator
                        style={[Styles.styleWeather.centering, {height: 80}]}
                        size="large"
                        color='white'/>
                </View>
            </Image>
        );
    }
}

export default Weather;
