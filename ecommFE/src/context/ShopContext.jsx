import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

export default function ShopContextProvider({children}) {
    const currency = '$';
    const deliveryFee = 10

    const contextValue = {
        products,
        deliveryFee,
        currency
    }

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}