import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Odunpazari from './pharmacy/Odunpazari';
import Tepebasi from './pharmacy/Tepebasi';
import Styles from "../util/Styles";

class Pharmacy extends React.Component {
    static navigationOptions = {
        title: 'Nöbetçi Eczaneler',
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <Image
                style={{flex: 1, resizeMode: 'stretch', width: '100%'}}
                source={require('../assets/background.png')}
            >

                <View style={Styles.stylePharmancy.containerColumn}>

                    <TouchableOpacity
                        style={Styles.stylePharmancy.button}
                        onPress={() => navigate('Tepebasi')}
                    >
                        <Text style={Styles.stylePharmancy.buttonText}>Tepebaşı</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={Styles.stylePharmancy.button}
                        onPress={() => navigate('Odunpazari')}
                    >
                        <Text style={Styles.stylePharmancy.buttonText}>Odunpazarı</Text>
                    </TouchableOpacity>
                </View>

            </Image>
        );
    }
}

const App = StackNavigator({
        Pharmacy: {screen: Pharmacy},
        Odunpazari: {screen: Odunpazari},
        Tepebasi: {screen: Tepebasi},
    },
    {
        headerMode: 'none',
    }
);

export default App;