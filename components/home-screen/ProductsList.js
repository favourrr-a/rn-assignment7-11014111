import { View, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Custom components
import ProductCard from './ProductCard';

// Styles
import { productsListStyles } from '../../styles/home-screen/productsListStyles';

export default function ProductsList(){
    const numColumns = 2;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        try {
            async function fetchProducts () { 
                const response = await axios.get('https://fakestoreapi.com/products')
                if (response.status === 200){
                    console.log("Products fetched successfully");
                    console.log(response.data);
                    setProducts(response.data);
                }
            }
        }
        catch (error) {
            console.log(error);
        }
        fetchProducts();
    }, []);
    

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