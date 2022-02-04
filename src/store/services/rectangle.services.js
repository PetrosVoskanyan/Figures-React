import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rectanglesService = createApi({
  reducerPath: 'rectanglesService',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://figures-platform-default-rtdb.firebaseio.com/',
  }),
  tagTypes: ['rectangles'],
  endpoints: (build) => ({
    fetchRectanglesList: build.query({
      query: () => 'rectangles.json',
      providesTags: ['rectangles'],
    }),
    createRectangle: build.mutation({
      query: (rectangle) => ({
        url: `rectangles/${rectangle.uid}.json`,
        method: `PUT`,
        body: rectangle,
      }),
      invalidatesTags: ['rectangles'],
    }),
    deleteRectangle: build.mutation({
      query: (rectangleUid) => ({
        url: `rectangles/${rectangleUid}.json`,
        method: 'DELETE',
      }),
      invalidatesTags: ['rectangles'],
    }),
  }),
});

export const {
  useCreateRectangleMutation,
  useDeleteRectangleMutation,
  useFetchRectanglesListQuery,
} = rectanglesService;
