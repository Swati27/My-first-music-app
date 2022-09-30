import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '10d8b0b3e6mshc15e8ad8c16af3ap11b26fjsn70ed8c7fd711',
//       'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

    export const shazamCoreAPI=createApi({
        reducerPath: 'shazamCoreAPI',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers)=>{
                headers.set('X-RapidAPI-Key','10d8b0b3e6mshc15e8ad8c16af3ap11b26fjsn70ed8c7fd711');
                return headers;
            },
        }),
        endpoints:(builder)=>({
            getTopCharts: builder.query({query: () => '/charts/world'}),//redux stores allows us to call it as a hook
        }),
    });

    export const { useGetTopChartsQuery }= shazamCoreAPI;