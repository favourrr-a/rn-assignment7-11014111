import { StyleSheet } from 'react-native';

export const addToCartButtonStyles = StyleSheet.create({
    container: {
        height: 60,
        width: '105.5%',
        backgroundColor: '#000000',
        alignSelf: 'center',
    },
    innerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    addAndTextContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    addIconContainer:{
        height: 60,
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: '2.5%'
    },
    addIcon: {
        height: 35,
        width:35,
    },
    addToCartTextContainer: {
        height: 60,
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },
    addToCartText: {
        color: '#fcfcfc',
        fontFamily: 'Optima',
        letterSpacing: '2'
    },
    heartIconContainer: {
        height: 60,
        alignContent: 'center',
        justifyContent: 'center',
        marginRight: '2.5%'
    },
    heartIcon: {
        height: 35,
        width: 35,
    }

})