import { PAGE_SIZE } from "../global/constants";
import { ProductQuery } from "../model/product";

export const init:ProductQuery={ total:0,
    products: [],
    activePage:-1};

export interface ProductBusiness {
     getProductQueryByPage(curretPage:number):Promise<ProductQuery> ;
}

export class ProductBusinessImpl implements ProductBusiness{
    
    async getProductQueryByPage(curretPage: number): Promise<ProductQuery>  {
        const page = (curretPage-1)*PAGE_SIZE;
        const rawResult = await fetch("https://dummyjson.com/products?limit="+PAGE_SIZE+"&skip="+page);
        const JSON = await rawResult.json();
         return {
                   products: JSON.products,
                   total:JSON.total,
                   activePage:page
                   };
    }
        
        
  }

  export const productBusiness:ProductBusiness = new ProductBusinessImpl();