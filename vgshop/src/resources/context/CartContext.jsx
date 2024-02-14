import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    function handleCart(arg) {
        if (cart.includes(arg)) {
            var arr = cart.filter((i) => i !== arg)
            setCart(arr)
        } else {
            setCart([...cart, arg]);
        }
    }

    return(
        <CartContext.Provider value={{ cart, handleCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
}