import { StyleSheet } from 'react-native';

export const checkoutHeaderStyles = StyleSheet.create({
    container: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        letterSpacing: 3,
        fontFamily: 'Optima',
    },
    lineDecorContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        height: 10,
    },
    lineDecor: {
        width: 120,
        height: 0.5,
        backgroundColor: '#999999',
    },
    diamondDecor: {
        width: 10,
        height: 10,
        borderWidth: 0.5,
        borderColor: '#7b7b7b',
        backgroundColor: 'white',
        transform: [{ rotate: '45deg' }],
        position: 'absolute',
    },
});
