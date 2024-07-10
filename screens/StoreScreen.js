import { SafeAreaView, View } from 'react-native';

// Custom components
import Header from '../components/store-screen/Header';
import CatalogueHeader from '../components/store-screen/CatalogueHeader';
import ProductsList from '../components/store-screen/ProductsList';

// Styles
import { appStyles } from '../styles/appStyles';
import { storeScreenStyles } from '../styles/store-screen/storeScreenStyles';

export default function StoreScreen() {
    return(
        <SafeAreaView style = {appStyles.container}>
            <View style = {storeScreenStyles.container}>
                <Header/>
                <CatalogueHeader/>
                <ProductsList/>
            </View>
        </SafeAreaView>
    )
}