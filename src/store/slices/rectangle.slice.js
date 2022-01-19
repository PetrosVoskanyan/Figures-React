import { createSlice } from '@reduxjs/toolkit';
import { genUid } from 'light-uid';

const getInitialState = () => {
  return {
    allRectangles: JSON.parse(localStorage.getItem('rectangle-storage-key')) ?? [],
  };
};


const slice = createSlice({
  name: 'rectangles',
  initialState: getInitialState(),
  reducers: {
    deleteRectangle: (state, { payload: uid }) => {
      state.allRectangles = state.allRectangles.filter((rectangle) => rectangle.uid !== uid);
    },
    createRectangle: (state, { payload }) => {
      state.allRectangles.push({ ...payload, uid: genUid() })
    },
  },
});

const selectors = {
  selectAll: (state) => state.rectangles.allRectangles,
  selectByUid: (state, uid) => state.rectangles.allRectangles.find((task) => task.uid === uid),
};

export const rectangleSlice = {
  ...slice,
  selectors,
};
