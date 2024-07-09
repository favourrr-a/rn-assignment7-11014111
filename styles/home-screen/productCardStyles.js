import { StyleSheet } from 'react-native';

export const productCardStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: 350,
        backgroundColor: 'white',
        marginBottom: 10,
    },
    imageAndAddButtonContainer: {
        width: '100%',
        height: '80%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    addButton: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        width: 30,
        height: 30,
    },
    productDetailsContainer: {
        width: '100%',
        height: '20%',
        padding: 10
    },
    productCategory: {
        fontSize: 20,
        color: '#000000',
        fontFamily: 'Monterchi-Regular',
    },
    productName: {
        fontSize: 16,
        color: '#555555',
        fontFamily: 'Monterchi-Regular',
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#dd8560',
        fontFamily: 'Optima',
    }
});