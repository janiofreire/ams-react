import { Product } from "./product";

export interface Car {
    produts: CarProduct[]; 
    totalProdutcts:number;   
}

export interface CarProduct {
    quant:number;
    product:Product
}