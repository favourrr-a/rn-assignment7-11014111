import { StyleSheet } from 'react-native';

export const cartScreenHeaderStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    menuContainer: {
        justifyContent: 'center',
    },
    menu: {
        width: 30,
        height: 30,
    },
    logo: {
        width: 100,
        height: 50,
    },
    iconsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    search: {
        width: 25,
        height: 25,
    },
});