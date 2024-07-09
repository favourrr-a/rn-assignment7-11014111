import { StyleSheet } from 'react-native';

export const catalogueHeaderStyles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        height: 50,
    },
    ourStoryContainer:{
        flex: 3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    ourStory:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Monterchi-Regular',
        letterSpacing: 3,
        height: 25,
    },
    listTypeAndFilterContainer: {
        width: 110,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listTypeContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: '50%',
        backgroundColor: '#f9f9f9',
    },
    listType: {
        height: 20,
        width: 20,    
    },
    filterContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: '50%',
        backgroundColor: '#f9f9f9',
    },
    filter: {
        height: 20,
        width: 20,        
    },
});