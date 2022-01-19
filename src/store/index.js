import { configureStore } from '@reduxjs/toolkit';
import { pointsSlice } from './slices/points.slice';
import { circleSlice } from './slices/circle.slice';
import { triangleSlice } from './slices/triangle.slice';
import { rectangleSlice } from './slices/rectangle.slice';


export const store = configureStore({
  reducer: {
    points: pointsSlice.reducer,
    circles: circleSlice.reducer,
    triangles: triangleSlice.reducer,
    rectangles: rectangleSlice.reducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('points-storage-key', JSON.stringify(state.points.allPoints));
  localStorage.setItem('circles-storage-key', JSON.stringify(state.circles.allCircles));
  localStorage.setItem('triangle-storage-key', JSON.stringify(state.triangles.allTriangles))
  localStorage.setItem('rectangle-storage-key', JSON.stringify(state.rectangles.allRectangles))
});

export {
  pointsSlice,
  circleSlice,
  triangleSlice,
  rectangleSlice,
};
