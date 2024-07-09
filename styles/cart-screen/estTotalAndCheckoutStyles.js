import { StyleSheet } from 'react-native';

export const estTotalAndCheckoutStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: -20,
    },
    estTotalContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    estTotalDesc: {
        fontSize: 20,
        fontFamily: 'Optima',
        letterSpacing: 4,
    },
    estTotal: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#dd8560',
        fontFamily: 'Optima',
    },
    checkoutButtonContainer: {
        width: 400,
        height: 60,
        backgroundColor: '#000000',
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkoutButtonImage: {
        width: 20,
        height: 20,
    },
    checkoutButtonText: {
        color: 'white',
        fontSize: 20,
        marginLeft: 10,
        fontFamily: 'Optima',
        letterSpacing: 1,
        color: '#fcfcfc',
    },
});