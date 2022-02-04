import { configureStore } from '@reduxjs/toolkit';
import { pointsService } from './services';
import { circlesService } from './services';
import { trianglesService } from './services';
import { rectanglesService } from './services';

export const store = configureStore({
  reducer: {
    [pointsService.reducerPath]: pointsService.reducer,
    [circlesService.reducerPath]: circlesService.reducer,
    [trianglesService.reducerPath]: trianglesService.reducer,
    [rectanglesService.reducerPath]: rectanglesService.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    pointsService.middleware,
    circlesService.middleware,
    trianglesService.middleware,
    rectanglesService.middleware,
  ],
});
