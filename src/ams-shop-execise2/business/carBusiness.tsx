import { PAGE_SIZE } from "../global/constants";
import { Car, CarProduct} from "../model/car";
import { Product } from "../model/product";


export interface CarBusinessMutation{
    addProdutToCar(product:Product,carProduct:Car):Car;
    removeProdutFromCar(product:Product,car:Car):Car; 
}

export interface CarBusinessState{
    getCarProductByPage(page: number,carProducts:CarProduct[]): Product[]
}

export interface CarBusiness extends CarBusinessMutation,CarBusinessState {}


export class CarBusinessImpl implements CarBusiness{
  
    addProdutToCar(product: Product,car:Car): Car {
        return this.executActionInCar(product,car,false);
    }

    removeProdutFromCar(product: Product,car:Car): Car {
        return this.executActionInCar(product,car,true);
    }

    countQuantProductCar(carProducts:CarProduct[],product:Product){
        if(carProducts && product){
                return carProducts.filter(cp => cp.product.id === product.id).reduce(
                    (quant,carProductAtual)=>
                        quant+carProductAtual.quant,
                    0
                );
        }else{
            return 0;
        }
    }

    executActionInCar(product:Product,car:Car,isRemove:boolean):Car{
        const carProducts:CarProduct[] = car.produts;
        const otherCarProduct:CarProduct[]=carProducts.filter(cp => cp.product.id !== product?.id);
        const quantProduto = this.countQuantProductCar(carProducts,product);
        const quant = quantProduto + (isRemove?-1:+1);
        const totalProduts = car.totalProdutcts + (isRemove?-1:+1);
        if(quant > 0){                    
            return { 
                produts:[...otherCarProduct,{
                    quant: quant,
                    product:product
                }],
                totalProdutcts:totalProduts
            };
        
        }else{            
            return { 
                produts:[...otherCarProduct],
                totalProdutcts:totalProduts<0?0:totalProduts
            };
        }  
        
    }

    getCarProductByPage(activePage: number,carProducts:CarProduct[]): Product[] {
        const inintIndex = (activePage-1)*PAGE_SIZE;        
        return carProducts.slice(inintIndex,inintIndex+PAGE_SIZE).map(car => car.product);
    }
    
}

export const carBusiness:CarBusiness = new CarBusinessImpl();