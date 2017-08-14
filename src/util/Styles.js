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
}

export default Styles;