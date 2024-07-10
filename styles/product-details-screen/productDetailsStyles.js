import { StyleSheet } from 'react-native';

export const productDetailsStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
    },
    imageContainer: {
        width: '100%',
        height: 400,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    productDetailsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    categoryTitlePriceContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    categoryAndShareContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignContent: 'center',
    },
    categoryContainer: {
        
        justifyContent: 'center',
    },
    productCategory: {
        fontSize: 23,
        fontFamily: 'Optima',
        letterSpacing: 3,
    },
    shareIconContainer: {
        
    },
    shareIcon: {
        width: 25,
        height: 25,
    },
    titlePriceContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    productTitle: {
        fontSize: 22,
        width: '100%',
        fontFamily: 'Optima',
        letterSpacing: 1,
        color: '#777777'
    },
    productPrice: {
        fontSize: 30,
        fontWeight: 'semibold',
        color: '#dd8560',
        fontFamily: 'Optima',
    },
    productMaterialsContainer: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 20,
        width: '100%',
    },
    icon: {
        width: 50,
        height: 50,   
    },
    descriptionsContainer: {
        marginTop: 10,
        borderBottomColor: '#808080',
        paddingBottom: 20,
    },
    textDescriptionContainer: {
        fontSize: 15,
        justifyContent: 'center'
    },
    descriptionsHeader: {
        fontSize: 18,
        fontFamily: 'Optima',
        letterSpacing: 3,
        marginBottom: 5,
    },
    description: {
        color: '#777777',
        fontSize: 18,
        fontFamily: 'Optima'
    },
    line: {
        borderBottomColor: '#808080',
        borderBottomWidth: 1,
        width: '90%',
    },
    deliveryContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        paddingBottom: 20,
        position: 'relative',
    },
    deliveryTruck: {
        width: 50,
        height: 50,    
    },
    deliveryDetails: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    deliveryTitle: {
        fontSize: 20,
        fontFamily: 'Optima',
    },
    deliveryDescription: {
        fontSize: 20,
        marginTop: 3,
        fontFamily: 'Optima',
        color: '#6b6b6b'
    },
    deliveryDate: {
        fontSize: 20,
        fontFamily: 'Optima',
        color: '#6b6b6b'
    },
    upArrowContainer: {
        position: 'absolute',
        right: 5,
    },
    upArrow: {
        width: 20,
        height: 20,
    }
});
