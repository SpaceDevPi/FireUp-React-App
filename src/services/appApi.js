import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const appApi = createApi({
    reducerPath : 'appApi',
    baseQuery : fetchBaseQuery({
        url : 'https://spacedevfireupbackend.herokuapp.com/',
    }),

    endpoint : (builder) => ({
        
    })
});