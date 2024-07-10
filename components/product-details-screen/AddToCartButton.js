import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useCart } from '../../contexts/cartContext';

// Styles
import {addToCartButtonStyles} from '../../styles/product-details-screen/addToCartButtonStyles';

// Assets
import addIcon from '../../assets/icons/add-icon-2.png';
import heartIcon from '../../assets/icons/favourite-icon.png'

export default function AddToCartButton({product}) {
    const {addItemToCart} = useCart();
    return(
        <TouchableOpacity style = {addToCartButtonStyles.container} onPress = {() => addItemToCart(product)}>
            <View style = {addToCartButtonStyles.innerContainer}>
            <View style = {addToCartButtonStyles.addAndTextContainer}>
                <View style = {addToCartButtonStyles.addIconContainer}>
                    <Image source = {addIcon} style = {addToCartButtonStyles.addIcon}/>
                </View>
                <View style = {addToCartButtonStyles.addToCartTextContainer}>
                    <Text style = {addToCartButtonStyles.addToCartText}> 
                        ADD TO BASKET 
                    </Text>
                </View>
            </View>
            <View style = {addToCartButtonStyles.heartIconContainer}>
                <Image source = {heartIcon} style = {addToCartButtonStyles.heartIcon}/>
            </View>
            </View>
        </TouchableOpacity>
    )
}