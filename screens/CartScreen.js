import { SafeAreaView, View } from 'react-native';

// Custom components
import CartScreenHeader from '../components/cart-screen/CartScreenHeader';
import CheckoutHeader from '../components/cart-screen/CheckoutHeader';
import CartItemsList from '../components/cart-screen/CartItemsList';
import EstTotalAndCheckout from '../components/cart-screen/EstTotalAndCheckout';

// Styles
import { appStyles } from '../styles/appStyles';
import { cartScreenStyles } from '../styles/cart-screen/cartScreenStyles';

export default function CartScreen() {
    return(
        <SafeAreaView style = {appStyles.container}>
            <View style = {cartScreenStyles.container}>
                <CartScreenHeader/>
                <CheckoutHeader/>
                <CartItemsList/>
                <EstTotalAndCheckout/>
            </View>
        </SafeAreaView>
    )
}