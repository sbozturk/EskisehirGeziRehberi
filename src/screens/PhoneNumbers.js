import React, {Component} from 'react';
import {AppRegistry, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import Communications from 'react-native-communications';

class PhoneNumbers extends React.Component {
    static navigationOptions = {
        title: 'Acil Numaralar',
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => Communications.phonecall('112', true)}>
                    <View style={styles.holder}>
                        <Text style={styles.text}>Ambulans</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Communications.phonecall('110', true)}>
                    <View style={styles.holder}>
                        <Text style={styles.text}>İtfaiye</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Communications.phonecall('155', true)}>
                    <View style={styles.holder}>
                        <Text style={styles.text}>Polis</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Communications.phonecall('156', true)}>
                    <View style={styles.holder}>
                        <Text style={styles.text}>Jandarma</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Communications.phonecall('185', true)}>
                    <View style={styles.holder}>
                        <Text style={styles.text}>Su Arıza</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Communications.phonecall('186', true)}>
                    <View style={styles.holder}>
                        <Text style={styles.text}>Elektrik Arıza</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Communications.phonecall('187', true)}>
                    <View style={styles.holder}>
                        <Text style={styles.text}>Gaz Arıza</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    holder: {
        backgroundColor: '#05265b',
        marginTop: 15,
        height: '11%',
        width: 300,
    },
    text: {
        textAlign: 'center',
        fontSize: 32,
        color: '#fff',
    },
});


export default PhoneNumbers;
