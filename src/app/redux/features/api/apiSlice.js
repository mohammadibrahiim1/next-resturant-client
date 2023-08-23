// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const allFoodApi = createApi({
  reducerPath: "allFoodApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),
  endpoints: (builder) => ({
    getFoodMenu: builder.query({
      query: (slug) => `allMenu?slug=${slug}`,
    }),
    getFoodCategory: builder.query({
      query: () => "categories",
    }),
    getPopularItems: builder.query({
      query: () => "popularItems",
    }),
    getBranches: builder.query({
      query: () => "branches",
    }),
    // getItemsBySlug: builder.query({
    //   query: (slug) => `allMenu?slug=${slug}`,
    // }),
  }),
});

export const {
  useGetFoodMenuQuery,
  useGetFoodCategoryQuery,
  useGetPopularItemsQuery,
  useGetBranchesQuery,
  // useGetItemsBySlugQuery,
} = allFoodApi;
