import { StyleSheet } from 'react-native';

export const drawerStyles = StyleSheet.create({
    headerContainer: {
        marginLeft: 10,
        paddingVertical: 20,
    },
    closeButtonContainer: {
        paddingRight: 20,
    },
    closeButton: {
        width: 20,
        height: 20,
        borderRadius: 40,
        marginBottom: 10,
    },
    userNameContainer: {
        marginTop: 15,
    },
    userName: {
        fontSize: 25,
        fontFamily: 'Monterchi-Bold',
        letterSpacing: 2,
        color: '#333333',
        marginLeft: -10
    },
    underline: {
        width: 100,
        height: 2,
        backgroundColor: '#dd8560',
        marginTop: 10,
    },
});
