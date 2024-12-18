import { createContext, useEffect, useState } from "react";
import { products } from "../assests/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async(ItemId,size) => {
        
        if(!size){
            toast.error('Please select a size',{autoClose: 2000});
            return;
        }

        let cartData = structuredClone(cartItems);

        if(cartData[ItemId]){
            if(cartData[ItemId][size]){
                cartData[ItemId][size] += 1;
            }else{
                cartData[ItemId][size] = 1;
            }
        }else{
            cartData[ItemId] = {};
            cartData[ItemId][size] = 1;
        }
        setCartItems(cartData);
        toast.success('Item added to cart',{autoClose: 2000, position: "top-center"});
    }
    
    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
    }
    return totalCount;
}

const updateQuantity = async(ItemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[ItemId][size] = quantity;
    setCartItems(cartData);
}

    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        totalAmount += cartItems[items][item] * products.find((product) => product._id === items).price;
                    }
                } catch (error) {
                    
                }
            }
    }
    return totalAmount;
}

    const value = {
      products,
      currency,
      delivery_fee,
      search,
      setSearch,
      showSearch,
      setShowSearch,
      cartItems,
      addToCart,
      getCartCount,updateQuantity,getCartAmount
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;