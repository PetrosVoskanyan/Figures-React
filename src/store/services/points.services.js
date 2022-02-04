import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pointsService = createApi({
  reducerPath: 'pointsService',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://figures-platform-default-rtdb.firebaseio.com/',
  }),
  tagTypes: ['points'],
  endpoints: (build) => ({
    fetchPointsList: build.query({
      query: () => 'points.json',
      providesTags: ['points'],
    }),
    createPoint: build.mutation({
      query: (point) => ({
        url: `points/${point.uid}.json`,
        method: `PUT`,
        body: point
      }),
      invalidatesTags: ['points'],
    }),
    deletePoint: build.mutation({
      query: (PointUid) => ({
        url: `points/${PointUid}.json`,
        method: 'DELETE',
      }),
      invalidatesTags: ['points'],
    }),
  }),
});

export const {
  useCreatePointMutation,
  useDeletePointMutation,
  useFetchPointsListQuery,
} = pointsService;
