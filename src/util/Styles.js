import {StyleSheet} from 'react-native';

class Styles {
    static styleNews = StyleSheet.create({
        buttonNews: {
            height: '25%',
            width: '100%',
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '#fff',
            borderWidth: 2,
        },

        buttonText: {
            textAlign: 'center',
            fontSize: 32,
            color: '#fff',
        },
        containerRow: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
        },
        containerColumn: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',

        },
    });

    static styleNewsDetail = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
        },
        card: {
            flex: 1,
            marginTop:20,
            marginBottom: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            width: '90%'
        },
        title: {
            fontSize: 16,
            marginBottom: 5,
            textAlign: 'center',
            fontWeight: 'bold',
            backgroundColor: 'white',
            width: '90%',
        },
        thumbnail: {
            marginTop: 10,
            width: '95%',
            height: 150,
        },
        centering: {
            alignItems: 'center',
            justifyContent: 'center',
            padding: 8,
        },
    });

    static stylePharmancy = StyleSheet.create({
        button: {
            backgroundColor: 'transparent',
            height: '50%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '#fff',
            borderWidth: 2,
        },

        buttonText: {
            textAlign: 'center',
            fontSize: 56,
            color: 'white',
        },
        containerColumn: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
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

    static stylePhoneNumbers = StyleSheet.create({
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

    static styleTramvay= StyleSheet.create({
        containerImg: {
            flex: 1,
        },
        img: {
            flex: 1,
            resizeMode: 'stretch',
            width: '100%',
        },
        containerRow: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'transparent'
        },
        containerColumn: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',

        },
        button: {
            backgroundColor: 'transparent',
            height: '14.4%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '#fff',
            borderWidth: 2,
        },

        buttonText: {
            textAlign: 'center',
            fontSize: 18,
            color: 'white',
            fontWeight: 'bold'
        },
    });

    static styleWeather = StyleSheet.create({
        centering: {
            alignItems: 'center',
            justifyContent: 'center',
            padding: 8,
        },
    });
}

export default Styles;
