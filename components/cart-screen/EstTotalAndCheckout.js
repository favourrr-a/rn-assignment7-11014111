import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useCart } from '../../contexts/cartContext';

// Styles
import { estTotalAndCheckoutStyles } from '../../styles/cart-screen/estTotalAndCheckoutStyles';

// Assets
import shoppingBagIcon from '../../assets/icons/checkout-shopping-bag-icon.png';

export default function EstTotalAndCheckout(){
    const { cartTotal } = useCart();

    return(
        <View style = {estTotalAndCheckoutStyles.container}>
            <View style = {estTotalAndCheckoutStyles.estTotalContainer}>
                <Text style = {estTotalAndCheckoutStyles.estTotalDesc}>EST. TOTAL </Text>
                <Text style = {estTotalAndCheckoutStyles.estTotal}>${cartTotal === null ? 0 : cartTotal}</Text>
            </View>
            <TouchableOpacity style = {estTotalAndCheckoutStyles.checkoutButtonContainer}>
                <Image source = {shoppingBagIcon} style = {estTotalAndCheckoutStyles.checkoutButtonImage}/>
                <Text style = {estTotalAndCheckoutStyles.checkoutButtonText}>CHECKOUT</Text>
            </TouchableOpacity>
        </View>
    )
}