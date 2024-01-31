import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.tvmaze.com";

const createRequest = (url) => ({
  url,
});

export const tvShowApi = createApi({
  reducerPath: "tvShowApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getTvShows: builder.query({
      query: (searchQuery) => createRequest(`/search/shows?q=${searchQuery}`),
    }),
    getTvShowDetails: builder.query({
      query: (id) => createRequest(`/shows/${id}`),
    }),
  }),
});

export const { useGetTvShowsQuery, useGetTvShowDetailsQuery } = tvShowApi;
