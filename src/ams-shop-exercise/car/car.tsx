import {Product} from "../product/product";

export interface Car {
    produts?: CarProduct[];
}

export interface CarProduct {
    quant:number;
    product:Product
}