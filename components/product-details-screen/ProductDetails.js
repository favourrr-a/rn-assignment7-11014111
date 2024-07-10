import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';

// Styles
import { productDetailsStyles } from '../../styles/product-details-screen/productDetailsStyles';

// Assets
import share from '../../assets/icons/share-icon.png';
import truck from '../../assets/icons/delivery-truck-icon.png';
import upArrow from '../../assets/icons/up-arrow-icon.png'

export default function ProductDetails({product}) {
    return(
        <ScrollView style = {productDetailsStyles.container} showsVerticalScrollIndicator = {false}>
            <View style = {productDetailsStyles.imageContainer}>
                <Image source = {{uri: product.image}} style = {productDetailsStyles.image} resizeMode = 'contain'/>
            </View>
            <View style = {productDetailsStyles.productDetailsContainer}>
                <View style = {productDetailsStyles.categoryTitlePriceContainer}>
                    <View style = {productDetailsStyles.categoryAndShareContainer}>
                        <View style = {productDetailsStyles.categoryContainer}>
                            <Text style = {productDetailsStyles.productCategory}>{product.category.toUpperCase()}</Text>
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
                <View style = {productDetailsStyles.descriptionsContainer}>
                    <Text style = {productDetailsStyles.descriptionsHeader}>
                        DESCRIPTION
                    </Text>
                    <View style = {productDetailsStyles.textDescriptionContainer}>
                        <Text style = {productDetailsStyles.description}>{product.description}</Text>
                    </View>
                </View>
            </View>
            <View style = {productDetailsStyles.line}/>
            <View style = {productDetailsStyles.deliveryContainer}>
                <Image source = {truck} style = {productDetailsStyles.deliveryTruck}/>
                <View style = {productDetailsStyles.deliveryDetails}>
                    <Text style = {productDetailsStyles.deliveryTitle}>Free Flat Rate Shipping</Text>
                    <Text style = {productDetailsStyles.deliveryDescription}>Estimated to be delivered on</Text>
                    <Text style = {productDetailsStyles.deliveryDate}>18/08/24 - 19/09/24</Text>
                </View>
                <TouchableOpacity style = {productDetailsStyles.upArrowContainer}>
                    <Image source = {upArrow} style = {productDetailsStyles.upArrow}/>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}