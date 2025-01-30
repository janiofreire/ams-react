import { PAGE_SIZE } from "../../global/constants";
import { useCarHook } from "../../hooks/carHook";
import { useCarStore } from "../../store/carStore";
import { ProductList } from "../components/productList";

export function CarList() {
    const {activePage,products,setPage,isLoading} = useCarHook();
    const totaListaProdutos = useCarStore.getState().produts.length;
    const totalPaginas = (totaListaProdutos/PAGE_SIZE)+(totaListaProdutos%PAGE_SIZE>0?1:0);
    if(activePage>totalPaginas){
      setPage(totalPaginas);
    }

    return (
     <ProductList 
        activePage={activePage}
        products={products || []}
        setPage={setPage}
        totalProdutos={totalPaginas}
        isLoading={isLoading}
     />
            
   );
 }