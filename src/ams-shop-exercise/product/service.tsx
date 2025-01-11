import {Product, ProductQuery} from "./product";

export async function getProducts(page:number): Promise<ProductQuery> {
    const rawResult = await fetch("https://dummyjson.com/products?limit=10&skip="+page);

    // Promise based
    //  return fetch('https://dummyjson.com/products')
    //       .then(res => res.json())
    //       .then(console.log);

    const JSON = await rawResult.json();

    return {
         products: JSON.products,
         total:JSON.total
        };
}