import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IParamProductRequest, IProductResponse } from "../types";

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: "https://mks-frontend-challenge-api.herokuapp.com/api/v1" }),
    endpoints: (build) => ({
        getProducts: build.query<IProductResponse, IParamProductRequest>({
            query: ({page = 1, rows = 8, sortBy = "id", orderBy = "DESC"}) => `/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`
        })
    })
});

export const { useGetProductsQuery } = productApi;