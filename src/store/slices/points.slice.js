import { createSlice } from '@reduxjs/toolkit';
import { genUid } from 'light-uid';

const getInitialState = () => {
  return {
    allPoints: JSON.parse(localStorage.getItem('points-storage-key')) ?? [],
  };
};


const slice = createSlice({
  name: 'points',
  initialState: getInitialState(),
  reducers: {
    deletePoint: (state, { payload: uid }) => {
      state.allPoints = state.allPoints.filter((point) => point.uid !== uid);
    },
    createPoint: (state, { payload }) => {
      state.allPoints.push({ ...payload, uid: genUid() })
    },
  },
});

const selectors = {
  selectAll: (state) => state.points.allPoints,
  selectByUid: (state, uid) => state.point.allPoints.find((task) => task.uid === uid),
};

export const pointsSlice = {
  ...slice,
  selectors,
};
