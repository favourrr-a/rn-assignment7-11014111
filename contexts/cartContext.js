import { useState, createContext, useContext, useEffect } from 'react';
import { storeItem, getItem } from '../local-storage/localStorage';

const CartContext = createContext();
const useCart = () => useContext(CartContext);

const CartContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(null);

    useEffect(() => {
        const loadCartItems = async () => {
            const storedItems = await getItem('cart-items');
            if (storedItems) {
                setCartItems(storedItems);
            }
            const storedTotal = await getItem('cart-total');
            if (storedTotal) {
                setCartTotal(storedTotal);
            }
        };
        loadCartItems();
    }, []);

    useEffect(() => {
        storeItem('cart-items', cartItems);
    }, [cartItems]);

    useEffect(() => {
        storeItem('cart-total', cartTotal);
    }, [cartTotal]);

    const addItemToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
        setCartTotal((prevTotal) => prevTotal + item.price);
        alert('Item added to cart');
    }

    const removeItemFromCart = (itemToRemove) => {
        const newCart = cartItems.filter((item) => item !== itemToRemove);
        setCartItems(newCart);
        setCartTotal((prevTotal) => prevTotal - itemToRemove.price);
        alert('Item removed from cart');
    }

    const cartContext = {
        cartItems,
        cartTotal,
        addItemToCart,
        removeItemFromCart
    }
    return (
        <CartContext.Provider value = {cartContext}>
            {children}
        </CartContext.Provider>
    )
}

export { useCart, CartContext, CartContextProvider }