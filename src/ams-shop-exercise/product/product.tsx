export interface Product {
    title?: string;
    description?: string;
    price?: number;
    reviews?: ProductReview[];
    thumbnail?: string;
    id:number;
}

export interface ProductReview {
    comment: string;
    reviewerEmail: string;
    reviewerName: string;
}

export interface ProductQuery{
    total:number;
    products: Product[];
    activePage?:number;
}

export interface ProductService {
    init:ProductQuery;
    getProductQueryByPage(curretPage:number):ProductQuery;
}

export class ProductServiceImpl implements ProductService{
    
    init:ProductQuery={ total:0,
        products: [],
        activePage:0};

    private async executGetProductQueryByPage(curretPage: number):Promise<ProductQuery> {
        const rawResult = await fetch("https://dummyjson.com/products?limit=10&skip="+curretPage);
         const JSON = await rawResult.json();
          return {
                    products: JSON.products,
                    total:JSON.total,
                    activePage:curretPage
                    };
    }
    

    getProductQueryByPage(curretPage: number): ProductQuery {
        const obj:Promise<ProductQuery> = this.executGetProductQueryByPage(curretPage);
        let productQuery:ProductQuery=this.init;
        obj.then((value =>productQuery=value))
        return productQuery;
    }
        
        
  }

