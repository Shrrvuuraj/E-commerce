import { createContext } from "react";
import {products} from "../assets/assets.js";

export const ShopContext =createContext();

const ShopContextProvider=(props)=>{
    const currency=`$`
    const delevery_fee=10;
    
     const value = {
          currency,
          delevery_fee,products
     }
     return(
          <ShopContext.Provider value={value}>
          {props.children}
          </ShopContext.Provider>
     )
}
export default ShopContextProvider;