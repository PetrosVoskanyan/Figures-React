import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const trianglesService = createApi({
  reducerPath: 'trianglesService',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://figures-platform-default-rtdb.firebaseio.com/',
  }),
  tagTypes: ['triangles'],
  endpoints: (build) => ({
    fetchTrianglesList: build.query({
      query: () => 'triangles.json',
      providesTags: ['triangles'],
    }),
    createTriangle: build.mutation({
      query: (triangle) => ({
        url: `triangles/${triangle.uid}.json`,
        method: `PUT`,
        body: triangle,
      }),
      invalidatesTags: ['triangles'],
    }),
    deleteTriangle: build.mutation({
      query: (triangleUid) => ({
        url: `triangles/${triangleUid}.json`,
        method: 'DELETE',
      }),
      invalidatesTags: ['triangles'],
    }),
  }),
});

export const {
  useCreateTriangleMutation,
  useDeleteTriangleMutation,
  useFetchTrianglesListQuery,
} = trianglesService;
