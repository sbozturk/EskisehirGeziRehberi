import {StyleSheet} from 'react-native';

class Styles {
    static stylesNewsDetail = StyleSheet.create({
        container: {
            flex: 1,
            marginBottom: 50,
        },
        title: {
            fontSize: 20,
            marginBottom: 8,
            textAlign: 'center',
            fontWeight: 'bold',
        },
        thumbnail: {
            width: '100%',
            height: 150,
        },
        centering: {
            alignItems: 'center',
            justifyContent: 'center',
            padding: 8,
        },
    });
    static stylePharmancyDetail = StyleSheet.create({
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
}

export default Styles;