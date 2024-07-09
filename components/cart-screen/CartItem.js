import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useCart } from '../../contexts/cartContext';

// Styles
import { cartItemStyles } from '../../styles/cart-screen/cartItemStyles';

// Assets
import remove from '../../assets/icons/remove-icon.png';

export default function CartItem({product}) {
    const { removeItemFromCart } = useCart();

    return(
        <View style = {cartItemStyles.container}>
            <Image source = {product.image} style = {cartItemStyles.image} resizeMode = 'contain'/>
            <View style = {cartItemStyles.productDetailsAndRemoveContainer}>
                <View style = {cartItemStyles.productDetailsContainer}>
                    <Text style = {cartItemStyles.productCategory}>{product.category}</Text>
                    <Text style = {cartItemStyles.productName}>{product.name}</Text>
                    <Text style = {cartItemStyles.productPrice}>${product.price}</Text>
                </View>
                <TouchableOpacity style = {cartItemStyles.removeButtonContainer}  onPress = {() => removeItemFromCart(product)}>
                    <Image source = {remove} style = {cartItemStyles.removeButton}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}