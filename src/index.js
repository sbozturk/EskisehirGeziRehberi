import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Pharmacy from './screens/Pharmacy';
import PhoneNumbers from './screens/PhoneNumbers';
import Tramvay from './screens/Tramvay';
import Travel from './screens/Travel';
import Weather from './screens/Weather';
import News from './screens/News';

const HomeScreen = React.createClass({
  navigationOptions: {
    title: 'Ana Sayfa',
  },

  render() {
    const { navigate } = this.props.navigation;

    return ( <View style={rowStyle.container}>
      <View style={columnStyle.container}>
      <TouchableOpacity
        style={buttonStyle.buttonWeather}
        onPress={() => navigate('Weather')}
      >
        <Text style={buttonStyle.buttonText}>Hava Durumu</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={buttonStyle.buttonTramvay}
        onPress={() => navigate('Tramvay')}
      >
        <Text style={buttonStyle.buttonText}>Tramvay</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={buttonStyle.buttonPharmacy}
        onPress={() => navigate('Pharmacy')}
      >
        <Text style={buttonStyle.buttonText}>Nöbetçi Eczaneler</Text>
      </TouchableOpacity>
    </View>

    <View style={columnStyle.container}>
    <TouchableOpacity
      style={buttonStyle.buttonTravel}
      onPress={() => navigate('Travel')}
    >
      <Text style={buttonStyle.buttonText}>Gezilecek Yerler</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={buttonStyle.buttonNews}
      onPress={() => navigate('News')}
    >
      <Text style={buttonStyle.buttonText}>Haberler</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={buttonStyle.buttonPhoneNumbers}
      onPress={() => navigate('PhoneNumbers')}
    >
      <Text style={buttonStyle.buttonText}>Acil Numaralar</Text>
    </TouchableOpacity>

  </View>

      </View>



  );
  },
});

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Weather: { screen: Weather },
  Travel: { screen: Travel },
  Tramvay: { screen: Tramvay },
  News: { screen: News },
  Pharmacy: { screen: Pharmacy },
  PhoneNumbers: { screen: PhoneNumbers },
});

export default App;

const rowStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
});

const columnStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
});

const buttonStyle = StyleSheet.create({

  buttonWeather: {
    backgroundColor: '#00b0ff',
    height: '30%',
    width: '90%',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 100/10,
  },

  buttonTravel: {
    backgroundColor: '#ff6f00',
    height: '30%',
    width: '90%',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 100/10,
  },

  buttonTramvay: {
    backgroundColor: '#ff6f00',
    height: '30%',
    width: '90%',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 100/10,
  },

  buttonNews: {
    backgroundColor: '#00b0ff',
    height: '30%',
    width: '90%',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 100/10,
  },

  buttonPharmacy: {
    backgroundColor: '#00b0ff',
    height: '30%',
    width: '90%',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 100/10,
  },

  buttonPhoneNumbers: {
    backgroundColor: '#ff6f00',
    height: '30%',
    width: '90%',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 100/10,
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 26, // this is 16 points
    color: 'white',
  },
});
