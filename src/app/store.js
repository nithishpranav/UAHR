import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import vReducer from '../features/data/vSlice' 
// import { patientReducer } from './Login/reducer'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    v: vReducer,
    // p : patientReducer
    //goals: goalReducer,
  }
})