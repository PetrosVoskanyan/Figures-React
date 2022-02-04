import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const circlesService = createApi({
  reducerPath: 'circlesService',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://figures-platform-default-rtdb.firebaseio.com/',
  }),
  tagTypes: ['circles'],
  endpoints: (build) => ({
    fetchCirclesList: build.query({
      query: () => 'circles.json',
      providesTags: ['circles'],
    }),
    createCircle: build.mutation({
      query: (circle) => ({
        url: `circles/${circle.uid}.json`,
        method: `PUT`,
        body: circle,
      }),
      invalidatesTags: ['circles'],
    }),
    deleteCircle: build.mutation({
      query: (circleUid) => ({
        url: `circles/${circleUid}.json`,
        method: 'DELETE',
      }),
      invalidatesTags: ['circles'],
    }),
  }),
});

export const {
  useCreateCircleMutation,
  useDeleteCircleMutation,
  useFetchCirclesListQuery,
} = circlesService;
