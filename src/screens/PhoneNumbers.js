import React, {Component} from 'react';
import {AppRegistry, StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import Communications from 'react-native-communications';

class PhoneNumbers extends React.Component {
    static navigationOptions = {
        title: 'Acil Numaralar',
    };

    render() {
        return (
            <Image
                style={{flex: 1, resizeMode: 'stretch', width: '100%'}}
                source={require('../assets/background.png')}
            >
                <View style={styles.container}>
                    <TouchableOpacity style={styles.holder} onPress={() => Communications.phonecall('112', true)}>
                        <View>
                            <Text style={styles.text}>Ambulans</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.holder} onPress={() => Communications.phonecall('110', true)}>
                        <View>
                            <Text style={styles.text}>İtfaiye</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.holder} onPress={() => Communications.phonecall('155', true)}>
                        <View>
                            <Text style={styles.text}>Polis</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.holder} onPress={() => Communications.phonecall('156', true)}>
                        <View>
                            <Text style={styles.text}>Jandarma</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.holder} onPress={() => Communications.phonecall('185', true)}>
                        <View>
                            <Text style={styles.text}>Su Arıza</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.holder} onPress={() => Communications.phonecall('186', true)}>
                        <View>
                            <Text style={styles.text}>Elektrik Arıza</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.holder} onPress={() => Communications.phonecall('187', true)}>
                        <View>
                            <Text style={styles.text}>Gaz Arıza</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    holder: {
        justifyContent: 'center',
        backgroundColor: 'transparent',
        height: '14.3%',
        width: '100%',
        borderColor: '#fff',
        borderWidth: 2,
    },
    text: {
        textAlign: 'center',
        fontSize: 32,
        color: '#fff',
    },
});


export default PhoneNumbers;
