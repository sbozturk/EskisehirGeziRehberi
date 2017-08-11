import React, {Component} from 'react';
import {TouchableOpacity, ActivityIndicator, StyleSheet, ListView, Text, View, Image} from 'react-native';
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
          <Image
          style={{flex:1, resizeMode: 'stretch', width: '100%'}}
          source={require('../../assets/background.png')}
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
          style={{flex:1, resizeMode: 'stretch', width: '100%'}}
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
                style={[odunpazariStyle.centering, {height: 80}]}
                size="large"
                color='white'/>
            </View>
          </Image>
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
      borderColor: '#fff',
      borderWidth: 2,
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20
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

  centering: {
  alignItems: 'center',
  justifyContent: 'center',
  padding: 8,
  },
});

console.disableYellowBox = true;
export default Odunpazari;
