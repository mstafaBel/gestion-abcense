// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import groupsReducer from './groupSlice';
import attendanceReducer from './attendanceSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    groups: groupsReducer,
    attendance: attendanceReducer,
  },
});

export default store;
