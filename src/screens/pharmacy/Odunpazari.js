import React, {Component} from 'react';
import {TouchableOpacity, ActivityIndicator, StyleSheet, ListView, Text, View} from 'react-native';
import Communications from 'react-native-communications';

var REQUEST_URL = 'https://eskisehir-nobetci-eczaneler.herokuapp.com/nobetciodunpazari';

class Odunpazari extends Component {
    static navigationOptions = {
        title: 'Odunpazarı Nöbetçi Eczaneler',
    };

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
        fetch(REQUEST_URL)
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
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderPharmancy}
                style={odunpazariStyle.listView}
            />
        );
    }

    renderLoadingView() {
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

    renderPharmancy(pharmancy) {
        return (
            <View style={odunpazariStyle.container}>
                <TouchableOpacity onPress={() => Communications.web('https://www.google.com.tr/maps/place/' + pharmancy.address)}>
                    <Text style={odunpazariStyle.title}>{pharmancy.name}</Text>
                    <Text style={odunpazariStyle.text}>{pharmancy.address}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Communications.phonecall(pharmancy.telephone, true)}>
                    <Text style={odunpazariStyle.textTelephone}>{pharmancy.telephone}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

var odunpazariStyle = StyleSheet.create({
  container: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: '#fff',
      borderColor: '#00b0ff',
      borderWidth: 2,
      borderRadius: 100 / 10,
      marginTop: 5,
      marginLeft: 20,
      marginRight: 20
  },

  listView: {
      backgroundColor: '#fff',
  },

  title: {
      fontSize: 16,
      marginBottom: 8,
      marginTop: 10,
      marginRight: 10,
      marginLeft: 10,
      fontWeight: 'bold',
  },

  text: {
      marginRight: 10,
      marginLeft: 10,
  },

  textTelephone: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10

  },
});

console.disableYellowBox = true;
export default Odunpazari;
