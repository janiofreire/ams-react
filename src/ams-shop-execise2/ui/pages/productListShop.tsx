import { useProductsHook } from "../../hooks/productHook";
import { ProductList } from "../components/productList";

export function ProductListShop() {
    const b = useProductsHook();
    return (
     <ProductList 
        activePage={b.activePage}
        products={b.products || []}
        setPage={b.setPage}
        totalProdutos={b.totalPaginas}
        isLoading={b.isLoading}
     />
            
   );
 }