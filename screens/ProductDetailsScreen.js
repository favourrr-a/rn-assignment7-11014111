import { SafeAreaView, View } from 'react-native';

// Custom components
import ProductDetailsScreenHeader from '../components/product-details-screen/ProductDetailsScreenHeader';
import ProductDetails from '../components/product-details-screen/ProductDetails';

// Styles
import { appStyles } from '../styles/appStyles';
import { productDetailsStyles } from '../styles/product-details-screen/productDetailsScreenStyles';

export default function ProductDetailsScreen({route}) {
    const { product } = route.params;
    return(
        <SafeAreaView style = {appStyles.container}>
            <View style = {productDetailsStyles.container}>
                <ProductDetailsScreenHeader/>
                <ProductDetails product = {product}/>
            </View>
        </SafeAreaView>
    );
}