import { createSlice } from '@reduxjs/toolkit';
import { genUid } from 'light-uid';

const getInitialState = () => {
  return {
    allCircles: JSON.parse(localStorage.getItem('circles-storage-key')) ?? [],
  };
};


const slice = createSlice({
  name: 'circles',
  initialState: getInitialState(),
  reducers: {
    deleteCircle: (state, { payload: uid }) => {
      state.allCircles = state.allCircles.filter((circle) => circle.uid !== uid);
    },
    createCircle: (state, { payload }) => {
      state.allCircles.push({ ...payload, uid: genUid() })
    },
  },
});

const selectors = {
  selectAll: (state) => state.circles.allCircles,
  selectByUid: (state, uid) => state.circles.allCircles.find((task) => task.uid === uid),
};

export const circleSlice = {
  ...slice,
  selectors,
};
