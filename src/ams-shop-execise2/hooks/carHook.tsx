import { useEffect, useState } from "react";
import { Product } from "../model/product";
import { PAGE_SIZE } from "../global/constants";
import { stateCarStore, useCarStore } from "../store/carStore";
import { carBusiness } from "../business/carBusiness";

export function useCarHook() {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState<Product[]>();
    const [activePage, setPage] = useState(1);
       const carSize = useCarStore((state) => state.produts.length);   
        useEffect(() => {
        function load() {
            setIsLoading(true);
             setProducts( carBusiness.getCarProductByPage(activePage,useCarStore.getState().produts));
             setIsLoading(false);
        }
        load();
               
    }, [activePage,carSize]);

   
    return { isLoading, products, activePage,setPage};
}