import { createSlice } from '@reduxjs/toolkit';
import { genUid } from 'light-uid';

const getInitialState = () => {
  return {
    allTriangles: JSON.parse(localStorage.getItem('triangle-storage-key')) ?? [],
  };
};


const slice = createSlice({
  name: 'triangles',
  initialState: getInitialState(),
  reducers: {
    deleteTriangle: (state, { payload: uid }) => {
      state.allTriangles = state.allTriangles.filter((triangle) => triangle.uid !== uid);
    },
    createTriangle: (state, { payload }) => {
      state.allTriangles.push({ ...payload, uid: genUid() })
    },
  },
});

const selectors = {
  selectAll: (state) => state.triangles.allTriangles,
  selectByUid: (state, uid) => state.triangles.allTriangles.find((task) => task.uid === uid),
};

export const triangleSlice = {
  ...slice,
  selectors,
};
