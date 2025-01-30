import { useState } from "react";
import { Product } from "../model/product";
import { useCarStore } from "../store/carStore";
import { carBusiness } from "../business/carBusiness";
import { loadEffect } from "./helperHook";

export function useCarHook() {
    const [products, setProducts] = useState<Product[]>();
    const [activePage, setPage] = useState(1);
    const carSize = useCarStore((state) => state.produts.length);   
     
    const {isLoading} = loadEffect(
        ()=>{
            setProducts( carBusiness.getCarProductByPage(activePage,useCarStore.getState().produts));
        },
        [activePage,carSize]
    );
   
    return { isLoading, products, activePage,setPage};
}