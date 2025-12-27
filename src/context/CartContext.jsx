import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (ticket) => {
        setCart([...cart, ticket]);
    };

    const removeFromCart = (ticketId) => {
        setCart(cart.filter(item => item.id !== ticketId));
    };

    const clearCart = () => setCart([]);

    const total = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
