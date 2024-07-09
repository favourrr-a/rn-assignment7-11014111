import { View, FlatList, Dimensions } from 'react-native';

// Custom components
import ProductCard from './ProductCard';

// Styles
import { productsListStyles } from '../../styles/home-screen/productsListStyles';

// Assets
import productImage1 from '../../assets/products-images/dress1.jpg';
import productImage2 from '../../assets/products-images/dress2.jpg';
import productImage3 from '../../assets/products-images/dress3.jpg';
import productImage4 from '../../assets/products-images/dress4.jpg';
import productImage5 from '../../assets/products-images/dress5.jpg';
import productImage6 from '../../assets/products-images/dress6.jpg';
import productImage7 from '../../assets/products-images/dress7.jpg';
import productImage8 from '../../assets/products-images/dress8.jpg';
import productImage9 from '../../assets/products-images/dress9.jpg';
import productImage10 from '../../assets/products-images/dress10.jpg';
import productImage11 from '../../assets/products-images/dress11.jpg';
import productImage12 from '../../assets/products-images/dress12.jpg';
import productImage13 from '../../assets/products-images/dress13.jpg';
import productImage14 from '../../assets/products-images/dress14.jpg';
import productImage15 from '../../assets/products-images/dress15.jpg';
import productImage16 from '../../assets/products-images/dress16.jpg';
import productImage17 from '../../assets/products-images/dress17.jpg';
import productImage18 from '../../assets/products-images/dress18.jpg';
import productImage19 from '../../assets/products-images/dress19.jpg';
import productImage20 from '../../assets/products-images/dress20.jpg';


export default function ProductsList(){
    const numColumns = 2;

    const products = [
        {
            id: 1,
            image: productImage1,
            category: 'Professional wear',       
            name: 'executive elegant dress',
            price: 120
        },
        {
            id: 2,
            image: productImage2,
            category: 'Casual wear',
            name: 'floral off shoulder sundress',
            price: 80
        },
        {
            id: 3,
            image: productImage3,
            category: 'Church wear',
            name: 'minimalist dress',
            price: 115
        },
        {
            id: 4,
            image: productImage4,
            category: 'Formal wear',
            name: 'glamorous black dress',
            price: 130
        },
        {
            id: 5,
            image: productImage5,
            category: 'Church wear',
            name: 'vintage design dress',
            price: 75
        },
        {
            id: 6,
            image: productImage6,
            category: 'Church wear',
            name: 'chic layered dress',
            price: 80
        },
        {
            id: 7,
            image: productImage7,
            category: 'Professional wear',
            name: 'glamorous office dress',
            price: 180
        },
        {
            id: 8,
            image: productImage8,
            category: 'Party wear',
            name: 'lightweight linen dress',
            price: 100
        },
        {
            id: 9,
            image: productImage9,
            category: 'Church wear',
            name: 'brightly coloured layered dress',
            price: 99
        },
        {
            id: 10,
            image: productImage10,
            category: 'Casual wear',
            name: 'casual summer dress',
            price: 65
        },
        {
            id: 11,
            image: productImage11,
            category: 'Casual wear',       
            name: 'bright floral dress',
            price: 100
        },
        {
            id: 12,
            image: productImage12,
            category: 'Formal wear',       
            name: 'puff sleeve flowy dress',
            price: 160
        },
        {
            id: 13,
            image: productImage13,
            category: 'Casual wear',       
            name: 'flowy summer dress',
            price: 110
        },
        {
            id: 14,
            image: productImage14,
            category: 'Formal wear',       
            name: 'modern business dress',
            price: 90
        },
        {
            id: 15,
            image: productImage15,
            category: 'Casual wear',       
            name: 'flowy floral dress',
            price: 85
        },
        {
            id: 16,
            image: productImage16,
            category: 'Church wear',       
            name: 'classic buttons and belt dress',
            price: 110
        },
        {
            id: 17,
            image: productImage17,
            category: 'Casual wear',       
            name: 'simple dress with small straps',
            price: 70
        },
        {
            id: 18,
            image: productImage18,
            category: 'Casual wear',       
            name: 'minimalist no hands dress',
            price: 70
        },
        {
            id: 19,
            image: productImage19,
            category: 'Church wear',       
            name: 'vintage pattern dress',
            price: 95
        },
        {
            id: 20,
            image: productImage20,
            category: 'Casual wear',       
            name: 'simple strappy dress',
            price: 100
        },
        
    ];
    const renderItem = ({ item }) => (
        <View style={productsListStyles.item}>
            <ProductCard product={item} />
        </View>
    );

    return (
        <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={numColumns}
            columnWrapperStyle={productsListStyles.row}
            contentContainerStyle={{ width: '100%' }}
            showsVerticalScrollIndicator={false}
            style={productsListStyles.container}
        />
    );
}