import {configureStore} from "@reduxjs/toolkit";
import doctorReducer from './slices/doctorSlice'
import userReducer from './slices/userSlice'
import slotReducer from './slices/slotSlice'

export default configureStore({
    reducer: {
        doctorReducer,
        userReducer,
        slotReducer
    }
})