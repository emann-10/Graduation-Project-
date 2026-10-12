import React, { createContext, useState, useEffect } from "react";
export const AppContext = createContext();
export default function AppProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        let savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    function addToCart(product) {
        setCartItems((prevItems) => {
            let existingProduct = prevItems.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [
                ...prevItems,
                { ...product, quantity: 1 }
            ];
        });
    }

    function removeFromCart(id) {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== id)
        );
    }

    function changeQuantity(id, amount) {
        setCartItems((prevItems) =>
            prevItems
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + amount }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    }

    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const cartTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <AppContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                changeQuantity,
                cartCount,
                cartTotal,
                showCart,
                setShowCart
            }}
        >
            {children}
        </AppContext.Provider>
    );
}