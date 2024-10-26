// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';

import navigationReducer from './slices/navigationSlice';

const store = configureStore({
	reducer: {
		navigation: navigationReducer, // Add reducers here as you create slices
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
