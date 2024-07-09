import { StyleSheet } from 'react-native';

export const cartItemsListStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    emptyCartTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyCartText: {
        alignSelf: 'center',
        fontSize: 20,
        fontFamily: 'Optima',
        color: 'grey',
    }
});
