import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useCart } from '../../contexts/cartContext';

// Styles
import { productCardStyles } from '../../styles/home-screen/productCardStyles';

// Assets
import add from '../../assets/icons/add-icon.png';

export default function ProductCard({product}) {
    const { addItemToCart } = useCart();
    return(
        <View style = {productCardStyles.container}>
            <View style = {productCardStyles.imageAndAddButtonContainer}>
                <Image source = {product.image} style = {productCardStyles.image}/>
                <TouchableOpacity style = {productCardStyles.addButtonContainer} onPress = {() => addItemToCart(product)}>
                    <Image source = {add} style = {productCardStyles.addButton}/>
                </TouchableOpacity>
            </View>
            <View style = {productCardStyles.productDetailsContainer}>
                <Text style = {productCardStyles.productCategory}>{product.category}</Text>
                <Text style = {productCardStyles.productName}>{product.name}</Text>
                <Text style = {productCardStyles.productPrice}>${product.price}</Text>
            </View>
        </View>
    )
}