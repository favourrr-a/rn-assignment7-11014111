import { ScrollView, View, Text } from 'react-native';
import { useCart } from '../../contexts/cartContext';

// Custom components
import CartItem from './CartItem';

// Styles
import { cartItemsListStyles } from '../../styles/cart-screen/cartItemsListStyles';

export default function CartItemsList(){
    const { cartItems } = useCart();

    return (
        <ScrollView showsVerticalScrollIndicator = {true} style = {cartItemsListStyles.container}>
            {cartItems.length === 0 ? 
                <View style = {cartItemsListStyles.emptyCartTextContainer}>
                    <Text style = {cartItemsListStyles.emptyCartText}> 
                        Your cart is currently empty. 
                    </Text>
                    <Text style = {cartItemsListStyles.emptyCartText}>
                        When you add items, they will show up here! 
                    </Text>
                </View>
                :
                cartItems.map(cartItem => (
                    <CartItem key = {cartItem.id} product = {cartItem}/>
                ))
            }
        </ScrollView>
    );
}