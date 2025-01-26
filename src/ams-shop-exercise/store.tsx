import { create,UseBoundStore, StoreApi} from 'zustand'
import { Product, ProductQuery, ProductService,ProductServiceImpl } from './product/product';
import { produce } from "immer";

export type StoreSet = <A extends string | { type: string }>(
    partial: any,
    replace?: boolean | undefined,
    action?: A | undefined
  ) => void;

interface Mutations {
    setActivePage(o:number): void;
    reset(): void;
 } 

 const service:ProductService = new ProductServiceImpl();

 function mutations(set: StoreSet): Mutations {
     function setActivePage(o: number) {
      set(
        produce((state: ProductQuery) => {
          state.activePage = o;
          const serviceLocal:ProductQuery= service.getProductQueryByPage(o);
          state.products = serviceLocal.products;
          state.total = serviceLocal.total;
        })
      );
    }
  
  
    function reset() {
      set(service.init);
    }
  
    return {
        setActivePage,
      
      reset
    };
  }
  interface Store extends ProductQuery, Mutations {}
  
  const useProdutoQueryStore = create<Store>()((set) => ({
    ...service.init,
    ...mutations(set),
  }))