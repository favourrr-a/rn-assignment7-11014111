import { StyleSheet } from 'react-native';

export const cartItemStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        backgroundColor: 'white',
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    image: {
        display: 'flex',
        flex: 1.2,
        height: '100%',
        width: 100,
    },
    productDetailsAndRemoveContainer: {
        display: 'flex',
        flex: 3,
        position: 'relative',
        justifyContent: 'center',
    },
    productDetailsContainer: {
        height: '100%',
        padding: 10,
        justifyContent: 'center',
    },
    productCategory: {
        fontSize: 28,
        color: '#000000',
        fontFamily: 'Monterchi-Light',
        letterSpacing: 3,
    },
    productName: {
        fontSize: 25,
        color: '#555555',
        fontFamily: 'Monterchi-Regular',
        marginTop: -5,
    },
    productPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#dd8560',
        fontFamily: 'Optima',
    },
    removeButtonContainer: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 15,
        right: 15,
        width: 30,
        height: 30,
    },
    removeButton: {
        width: 30,
        height: 30,
    },
});