import { SafeAreaView, View } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

// Custom components
import ProductDetailsScreenHeader from '../components/product-details-screen/ProductDetailsScreenHeader';
import ProductDetails from '../components/product-details-screen/ProductDetails';
import AddToCartButton from '../components/product-details-screen/AddToCartButton';

// Styles
import { appStyles } from '../styles/appStyles';
import { productDetailsStyles } from '../styles/product-details-screen/productDetailsScreenStyles';

export default function ProductDetailsScreen({route, navigation}) {
    const { product } = route.params;
    const openDrawer = () => {
        navigation.navigate('DrawerNav', { screen: 'Home' });
        navigation.dispatch(DrawerActions.openDrawer());
    };
    return(
        <SafeAreaView style = {appStyles.container}>
            <View style = {productDetailsStyles.container}>
                <ProductDetailsScreenHeader openDrawer = {openDrawer} navigation = {navigation}/>
                <ProductDetails product = {product}/>
                <AddToCartButton product = {product}/>
            </View>
        </SafeAreaView>
    );
}