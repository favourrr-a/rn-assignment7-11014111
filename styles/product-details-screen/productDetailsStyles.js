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
        borderColor: 'red'
    },
    categoryContainer: {
        
        justifyContent: 'center',
    },
    productCategory: {
        fontSize: 20,
        fontWeight: 'bold',
        
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
        borderColor: 'red'
    },
    productTitle: {
        fontSize: 15,
        width: '100%',
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#dd8560',
    },
    productMaterialsContainer: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 20,
        borderColor: 'red',
        width: '100%',
    },
    materialsHeader: {
        
        fontSize: 20,
    },
    descriptionContainer: {
        display: 'flex',
        flexDirection: 'row',
        
        borderColor: 'red',
        width: '100%',
    },
    icon: {
        width: 50,
        height: 50,
        
    },
    textDescriptionContainer: {
        fontSize: 15,
        
        borderColor: 'blue',
        marginLeft: 10,
        justifyContent: 'center'
    },
    description: {
        // alignSelf: 'center',
        // justifySelf: 'center',
    },
    deliveryContainer: {
        
        display: 'flex',
        flexDirection: 'row'
    },
    deliveryTruck: {
        width: 50,
        height: 50,    
    },
    deliveryDetails: {
        borderWidth: 1,
        marginLeft: 10,
        justifyContent: 'center'
    }
});
