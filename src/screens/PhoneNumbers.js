import React, {Component} from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import Communications from 'react-native-communications';
import Styles from "../util/Styles";

class PhoneNumbers extends Component {
    static navigationOptions = {
        title: 'Acil Numaralar',
    };

    render() {
        return (
            <Image
                style={{flex: 1, resizeMode: 'stretch', width: '100%'}}
                source={require('../assets/background.png')}
            >
                <View style={Styles.stylePharmancyDetail.container}>
                    <TouchableOpacity style={Styles.stylePharmancyDetail.holder} onPress={() => Communications.phonecall('112', true)}>
                        <View>
                            <Text style={Styles.stylePharmancyDetail.text}>Ambulans</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.stylePharmancyDetail.holder} onPress={() => Communications.phonecall('110', true)}>
                        <View>
                            <Text style={Styles.stylePharmancyDetail.text}>İtfaiye</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.stylePharmancyDetail.holder} onPress={() => Communications.phonecall('155', true)}>
                        <View>
                            <Text style={Styles.stylePharmancyDetail.text}>Polis</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.stylePharmancyDetail.holder} onPress={() => Communications.phonecall('156', true)}>
                        <View>
                            <Text style={Styles.stylePharmancyDetail.text}>Jandarma</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.stylePharmancyDetail.holder} onPress={() => Communications.phonecall('185', true)}>
                        <View>
                            <Text style={Styles.stylePharmancyDetail.text}>Su Arıza</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.stylePharmancyDetail.holder} onPress={() => Communications.phonecall('186', true)}>
                        <View>
                            <Text style={Styles.stylePharmancyDetail.text}>Elektrik Arıza</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.stylePharmancyDetail.holder} onPress={() => Communications.phonecall('187', true)}>
                        <View>
                            <Text style={Styles.stylePharmancyDetail.text}>Gaz Arıza</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Image>
        );
    }
}

export default PhoneNumbers;
