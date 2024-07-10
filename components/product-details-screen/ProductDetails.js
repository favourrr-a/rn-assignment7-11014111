import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';

// Styles
import { productDetailsStyles } from '../../styles/product-details-screen/productDetailsStyles';

// Assets
import share from '../../assets/icons/share-icon.png';
import truck from '../../assets/icons/delivery-truck-icon.png';

export default function ProductDetails({product}) {
    const icons = [
        require('../../assets/icons/no-bleach-icon.png'),
        require('../../assets/icons/no-tumble-dry-icon.png'),
        require('../../assets/icons/iron-icon.png'),
    ];
    const descriptions = product.description.split(',');

    return(
        <ScrollView style = {productDetailsStyles.container}>
            <View style = {productDetailsStyles.imageContainer}>
                <Image source = {{uri: product.image}} style = {productDetailsStyles.image} resizeMode = 'contain'/>
            </View>
            <View style = {productDetailsStyles.productDetailsContainer}>
                <View style = {productDetailsStyles.categoryTitlePriceContainer}>
                    <View style = {productDetailsStyles.categoryAndShareContainer}>
                        <View style = {productDetailsStyles.categoryContainer}>
                            <Text style = {productDetailsStyles.productCategory}>{product.category}</Text>
                        </View>
                        <TouchableOpacity style = {productDetailsStyles.shareIconContainer}>
                            <Image source = {share} style = {productDetailsStyles.shareIcon}/>
                        </TouchableOpacity>
                    </View>
                    <View style = {productDetailsStyles.titlePriceContainer}>
                        <Text style = {productDetailsStyles.productTitle}>{product.title}</Text>
                        <Text style = {productDetailsStyles.productPrice}>${product.price}</Text>
                    </View>
                </View>
                <View style = {productDetailsStyles.productMaterialsContainer}>
                    <Text style = {productDetailsStyles.materialsHeader}>MATERIALS</Text>
                    {descriptions.map((description, index) => (
                    <View key = {index} style={productDetailsStyles.descriptionContainer}>
                        <Image source = {icons[index]} style = {productDetailsStyles.icon} />
                        <View style = {productDetailsStyles.textDescriptionContainer}>
                            <Text style = {productDetailsStyles.description}>{description.trim()}</Text>
                        </View>
                    </View>
                    ))}
                </View>
            </View>
            <View style = {productDetailsStyles.deliveryContainer}>
                <Image source = {truck} style = {productDetailsStyles.deliveryTruck}/>
                <View style = {productDetailsStyles.deliveryDetails}>
                    <Text style = {productDetailsStyles.deliveryTitle}>Free Flat Rate Shipping</Text>
                    <Text style = {productDetailsStyles.deliveryDescription}>Estimated to be delivered on</Text>
                    <Text style = {productDetailsStyles.deliveryDate}>18/08/24 - 19/09/24</Text>
                </View>
            </View>
        </ScrollView>
    )
}