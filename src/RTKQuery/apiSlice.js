import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi", // reducer name
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }), //This sets the base url
  endpoints: (builder) => ({ // this is used to set the query and parama for the url
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getProduct: builder.query({
      query: (product) => `products/search?q=${product}`,
    }),
    // addProdyct: builder.mutation({
    //     query: (product) => ({
    //         url: '/products/add',
    //         method: 'POST',
    //         body: product
    //     }),
    // }),
  }),
});

export const { useGetAllProductsQuery, useGetProductQuery } = productsApi; 
// useGetAllProductsQuery--> these are the hooks returned by the  creatApi, 
// use+getAllProducts+Query =>useGetAllProductsQuery