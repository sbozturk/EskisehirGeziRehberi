import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Pharmacy from './Pharmacy';
import PhoneNumbers from './PhoneNumbers';
import Tramvay from './Tramvay';
import Travel from './Travel';
import Weather from './Weather';
import News from './News';

const HomeScreen = React.createClass({
  navigationOptions: {
    title: 'Welcome',
  },

  render() {
    const { navigate } = this.props.navigation;

    return <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Weather')}
      >
        <Text>Hava Durumu</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Travel')}
      >
        <Text>Gezilecek Yerler</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Tramvay')}
      >
        <Text>Tramvay</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('News')}
      >
        <Text>Haberler</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Pharmacy')}
      >
        <Text>Nöbetçi Eczaneler</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('PhoneNumbers')}
      >
        <Text>Aci Numaralar</Text>
      </TouchableOpacity>

    </View>;
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
  },
  button: {
    padding: 10,
  },
});
