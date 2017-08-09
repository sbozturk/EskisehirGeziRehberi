import React, {Component} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {ListItem} from 'react-native-elements';

class LoadingIndicator extends Component {
    render() {
        return (
            <View
                style={{
                    paddingTop: 10,
                    flex: 1,
                    backgroundColor: 'white',
                }}
            >
                <ActivityIndicator/>
            </View>
        );
    }
}

class Weather extends Component {
    static navigationOptions = {
        title: 'Hava Durumu',
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch(
            `http://api.openweathermap.org/data/2.5/find?q=Eskisehir&units=metric&appid=ea2b8fad5846f2a27f48d270819041e7`
        )
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
                        icon: 'http://openweathermap.org/img/w/' + responseData.list[0].weather[0].icon + '.png',
                    },
                });
            });
    }

    render() {
        if (this.state.isLoading) {
            return <LoadingIndicator/>;
        }

        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <ListItem
                    title={this.state.city.name}
                    subtitle={this.state.city.weather}
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
                    rightTitle={this.state.city.humidity + '%'}
                    hideChevron
                />
                <ListItem
                    title="Basınç"
                    rightTitle={this.state.city.pressure + ' hPa'}
                    hideChevron
                />
                <ListItem
                    title="Rüzgar Hızı"
                    rightTitle={this.state.city.wind_speed + ' mph'}
                    hideChevron
                />
                <ListItem
                    title="Bulut Örtüsü"
                    rightTitle={this.state.city.cloudiness + '%'}
                    hideChevron
                />
            </View>
        );
    }
}

export default Weather;
