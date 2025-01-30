import { create} from 'zustand'

import { produce } from "immer";

import { StoreSet } from './store';
import { carBusiness } from '../business/carBusiness';
import { Product } from '../model/product';
import { Car } from '../model/car';
  
 export const init:Car={
    produts:[],
    totalProdutcts:0
};

interface State extends Car{
    productsPage:Product[],
    activePage:number,
    totalPaginas:number
}

 interface Mutation {
    addProdutToCar(product:Product):void;
    removeProdutFromCar(product:Product):void;
     reset(): void;
} 

function updateStateWithCarValua(state:Car,car:Car){
    state.produts=car.produts;
    state.totalProdutcts=car.totalProdutcts;  
}

 function mutations(set: StoreSet): Mutation {
     
   function addProdutToCar(product:Product):void{
         set(
            produce((state: State) => {
                const carLocal:Car= carBusiness.addProdutToCar(product,state);
                updateStateWithCarValua(state,carLocal);
            })
        );
    
   }

   function removeProdutFromCar(product:Product):void{
          set(
            produce((state: State) => {
                const carLocal:Car= carBusiness.removeProdutFromCar(product,state);
                updateStateWithCarValua(state,carLocal);
            })
        );            
    } 

    function reset():void{
        set(init);
    }    
    
    return {     
      addProdutToCar,
      removeProdutFromCar,      
      reset
    };
  }
  interface Store extends Car, Mutation {}
  
  export const useCarStore = create<Store>()((set) => ({
    ...init,
    ...mutations(set),
  }))

  export const stateCarStore = useCarStore.getState();