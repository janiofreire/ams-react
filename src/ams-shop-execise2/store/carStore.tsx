import { create} from 'zustand'

import { produce } from "immer";

import { StoreSet } from './store';
import { carBusiness, CarBusinessMutation } from '../business/carBusiness';
import { Product } from '../model/product';
import { Car } from '../model/car';
import { PAGE_SIZE } from '../global/constants';


  
 export const init:Car={
    produts:[],
    totalProdutcts:0
};

interface State extends Car{
    productsPage:Product[],
    activePage:number,
    totalPaginas:number
}

 interface Mutation extends CarBusinessMutation{
     reset(): void;
} 

function updateStateWithCarValua(state:Car,car:Car){
    state.produts=car.produts;
    state.totalProdutcts=car.totalProdutcts;  
}

 function mutations(set: StoreSet): Mutation {
     
   function addProdutToCar(product:Product):Car{
        let carLocal:Car=init;
        set(
            produce((state: State) => {
                const carLocal:Car= carBusiness.addProdutToCar(product,state);
                updateStateWithCarValua(state,carLocal);
            })
        );
        return carLocal;    
   }

   function removeProdutFromCar(product:Product):Car{
        let carLocal:Car=init;
        set(
            produce((state: State) => {
                const carLocal:Car= carBusiness.removeProdutFromCar(product,state);
                updateStateWithCarValua(state,carLocal);
            })
        );
        return carLocal;    
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