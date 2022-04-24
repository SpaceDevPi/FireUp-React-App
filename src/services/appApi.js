import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const appApi = createApi({
    reducerPath : 'appApi',
    baseQuery : fetchBaseQuery({
        url : 'http://localhost:5000/',
    }),

    endpoint : (builder) => ({
        
    })
});