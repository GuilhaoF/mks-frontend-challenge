export interface IProduct {
    id: number;
    name: string;
    price: number;
    photo: string;
    brand: string;
    description: string;   
}

export interface IProductResponse {
    count: number;
    products: IProduct[];
}

export interface ICart {
    product: IProduct;
    quantity: number;
}

export interface ICartState {
    items: ICart[];
}

export enum sortBy {
    "id" = "id",
    "name" = "name",
    "price" = "price"
}

export enum orderBy {
    "DESC" = "DESC",
    "ASC" = "ASC"
}

export interface IParamProductRequest {
    page: number;
    rows: number;
    sortBy: sortBy;
    orderBy: orderBy;
}
