import { SafeAreaView, View } from 'react-native';

// Custom components
import Header from '../components/home-screen/Header';
import CatalogueHeader from '../components/home-screen/CatalogueHeader';
import ProductsList from '../components/home-screen/ProductsList';

// Styles
import { appStyles } from '../styles/appStyles';
import { homeScreenStyles } from '../styles/home-screen/homeScreenStyles';

export default function HomeScreen() {
    return(
        <SafeAreaView style = {appStyles.container}>
            <View style = {homeScreenStyles.container}>
                <Header/>
                <CatalogueHeader/>
                <ProductsList/>
            </View>
        </SafeAreaView>
    )
}