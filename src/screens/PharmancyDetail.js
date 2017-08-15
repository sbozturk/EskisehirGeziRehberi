import React, {Component} from 'react';
import {TouchableOpacity, ActivityIndicator, ListView, Text, View, Image} from 'react-native';
import Communications from 'react-native-communications';
import Styles from "../util/Styles";

class PharmancyDetail extends Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title,
    });


    constructor(props) {
        super(props);
        this.state = {
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
        const {params} = this.props.navigation.state;
        fetch(params.REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData),
                    loaded: true,
                });
            })
            .done();
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <Image
                style={{flex: 1, resizeMode: 'stretch', width: '100%'}}
                source={require('../assets/background.png')}
            >
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderPharmancy}
                />
            </Image>
        );
    }

    renderLoadingView() {
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
                        style={[Styles.stylePharmancyDetail.centering, {height: 80}]}
                        size="large"
                        color='white'/>
                </View>
            </Image>
        );
    }

    renderPharmancy(pharmancy) {
        return (
            <View style={Styles.stylePharmancyDetail.container}>
                <TouchableOpacity
                    onPress={() => Communications.web('https://www.google.com.tr/maps/place/' + pharmancy.address)}>
                    <Text style={Styles.stylePharmancyDetail.title}>{pharmancy.name}</Text>
                    <Text style={Styles.stylePharmancyDetail.text}>{pharmancy.address}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Communications.phonecall(pharmancy.telephone, true)}>
                    <Text style={Styles.stylePharmancyDetail.textTelephone}>{pharmancy.telephone}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

console.disableYellowBox = true;
export default PharmancyDetail;
