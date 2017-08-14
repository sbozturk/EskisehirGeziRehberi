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
                <View style={Styles.stylePhoneNumbers.container}>
                    <TouchableOpacity style={Styles.stylePhoneNumbers.holder} onPress={() => Communications.phonecall('112', true)}>
                        <View>
                            <Text style={Styles.stylePhoneNumbers.text}>Ambulans</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.stylePhoneNumbers.holder} onPress={() => Communications.phonecall('110', true)}>
                        <View>
                            <Text style={Styles.stylePhoneNumbers.text}>İtfaiye</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.stylePhoneNumbers.holder} onPress={() => Communications.phonecall('155', true)}>
                        <View>
                            <Text style={Styles.stylePhoneNumbers.text}>Polis</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.stylePhoneNumbers.holder} onPress={() => Communications.phonecall('156', true)}>
                        <View>
                            <Text style={Styles.stylePhoneNumbers.text}>Jandarma</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.stylePhoneNumbers.holder} onPress={() => Communications.phonecall('185', true)}>
                        <View>
                            <Text style={Styles.stylePhoneNumbers.text}>Su Arıza</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.stylePhoneNumbers.holder} onPress={() => Communications.phonecall('186', true)}>
                        <View>
                            <Text style={Styles.stylePhoneNumbers.text}>Elektrik Arıza</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.stylePhoneNumbers.holder} onPress={() => Communications.phonecall('187', true)}>
                        <View>
                            <Text style={Styles.stylePhoneNumbers.text}>Gaz Arıza</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Image>
        );
    }
}

export default PhoneNumbers;
