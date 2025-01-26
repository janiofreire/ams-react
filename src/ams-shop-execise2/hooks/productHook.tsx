import { useEffect, useState } from "react";
import { productBusiness } from "../business/productBusiness";
import { Product, ProductQuery } from "../model/product";
import { PAGE_SIZE } from "../global/constants";

export function useProductsHook() {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState<Product[]>();
    const [activePage, setPage] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(0);

    useEffect(() => {
        async function load() {
            setIsLoading(true);
            const serviceLocal:ProductQuery= await productBusiness.getProductQueryByPage(activePage);
            setProducts(serviceLocal.products);
            setTotalPaginas((serviceLocal.total/PAGE_SIZE)+(serviceLocal.total%PAGE_SIZE>0?1:0));
            setIsLoading(false);
        }

        load();
    }, [activePage]);

    return {isLoading, products, activePage, totalPaginas,setPage};
}