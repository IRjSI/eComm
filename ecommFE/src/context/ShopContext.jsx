import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

export default function ShopContextProvider({children}) {
    const currency = '$';
    const deliveryFee = 10;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, size) => {
        let cartData = structuredClone(cartItems);
        
    }

    const contextValue = {
        products,
        deliveryFee,
        currency,
        search,
        setSearch,
        showSearch,
        setShowSearch
    }

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}