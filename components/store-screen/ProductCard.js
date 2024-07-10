import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useCart } from '../../contexts/cartContext';
import { useNavigation } from '@react-navigation/native';

// Styles
import { productCardStyles } from '../../styles/store-screen/productCardStyles';

// Assets
import add from '../../assets/icons/add-icon.png';

export default function ProductCard({product}) {
    const { addItemToCart } = useCart();
    const navigation = useNavigation();
    const viewProductDetails = () => {
        navigation.navigate('ProductDetailsScreen', {product: product});
    }
    return(
        <TouchableOpacity style = {productCardStyles.container} onPress = {viewProductDetails}>
            <View style = {productCardStyles.imageAndAddButtonContainer}>
                <Image source = {{uri: product.image}} style = {productCardStyles.image} resizeMode = "contain"/>
                <TouchableOpacity style = {productCardStyles.addButtonContainer} onPress = {() => addItemToCart(product)}>
                    <Image source = {add} style = {productCardStyles.addButton}/>
                </TouchableOpacity>
            </View>
            <View style = {productCardStyles.productDetailsContainer}>
                <Text style = {productCardStyles.productCategory}>{product.category}</Text>
                <Text style = {productCardStyles.productName}>{product.title}</Text>
                <Text style = {productCardStyles.productPrice}>${product.price}</Text>
            </View>
        </TouchableOpacity>
    )
}