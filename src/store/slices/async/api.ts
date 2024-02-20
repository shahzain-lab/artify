import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),    
    endpoints: (builder) => ({
        // define your endpoint here to fetch data from server. following base endpoint
        example: builder.query({
            query: () => 'example'
        })
    })
})

export const {
   useExampleQuery
} = apiSlice