import React, {Component} from 'react';
import {AppRegistry, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import Communications from 'react-native-communications';

const PhoneNumbers = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => Communications.phonecall('112', true)}>
                    <View style={styles.holder}>
                        <Text style={styles.text}>Acil Yardım</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Communications.phonecall('110', true)}>
                    <View style={styles.holder}>
                        <Text style={styles.text}>Alo İtfaiye</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Communications.phonecall('155', true)}>
                    <View style={styles.holder}>
                        <Text style={styles.text}>Polis İmdat</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Communications.phonecall('156', true)}>
                    <View style={styles.holder}>
                        <Text style={styles.text}>Jandarma İmdat</Text>
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
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgb(253,253,253)',
    },
    holder: {
        justifyContent: 'center',
    },
    text: {
        fontSize: 32,
    },
});


export default PhoneNumbers;
