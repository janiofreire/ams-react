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
}