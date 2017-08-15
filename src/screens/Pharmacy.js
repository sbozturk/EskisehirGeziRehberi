import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {StackNavigator} from 'react-navigation';
import PharmancyDetail from './PharmancyDetail';
import Constant from "../util/Constant";
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
                        onPress={() => navigate('PharmacyDetail', {title: 'Tepebaşı', REQUEST_URL: Constant.REQUEST_URL_TEPEBASI})}
                    >
                        <Text style={Styles.stylePharmancy.buttonText}>Tepebaşı</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={Styles.stylePharmancy.button}
                        onPress={() => navigate('PharmacyDetail', {title: 'Odunpazarı', REQUEST_URL: Constant.REQUEST_URL_ODUNPAZARI})}
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
        PharmacyDetail: {screen: PharmancyDetail},
    },
    {
        headerMode: 'none',
    }
);

export default App;