import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios";
import {deleteSlotArraySlotSlice} from "./slotSlice";

const initialState = {
    currentDoctor: {},
}

export const getDoctorDoctorSlice = createAsyncThunk('doctorSlice/getDoctorDoctorSlice',
    async (id)=>{
        try{
            const {data} = await axios.get(`doctor/getDoctor/${id.doctor_id}`)
            return data
        }
        catch (e) {
            console.log(e)
        }
    })

export const updateDoctorSlotDoctorSlice = createAsyncThunk('doctorSlice/updateDoctorSlotDoctorSlice',
    async (dataToUpdate)=>{
        try{
            const {data} = await axios.post(`doctor/updateDoctorSlot`,dataToUpdate)
            return data
        }
        catch (e) {
            console.log(e.response.data.message)
        }
    })

export const refreshDoctorSlotDoctorSlice = createAsyncThunk('doctorSlice/refreshDoctorSlotDoctorSlice',
    async (dataToUpdate,{_,dispatch})=>{
        try{
            const {data} = await axios.post(`doctor/refreshDoctorSlot`,dataToUpdate)
            dispatch(deleteSlotArraySlotSlice({doctor_id:data._id}))
            return data
        }
        catch (e) {
            console.log(e)
        }
    })

const doctorSlice = createSlice({
    name: 'doctor',
    initialState,
    reducers:{},
    extraReducers:{
        [getDoctorDoctorSlice.pending]:(state)=> {
        },
        [getDoctorDoctorSlice.fulfilled]:(state,action)=>{
            state.currentDoctor = action.payload
        },
        [getDoctorDoctorSlice.rejected]:(state)=>{
        },

        [updateDoctorSlotDoctorSlice.pending]:(state)=> {
        },
        [updateDoctorSlotDoctorSlice.fulfilled]:(state,action)=>{
            state.currentDoctor = action.payload
        },
        [updateDoctorSlotDoctorSlice.rejected]:(state)=>{
        },

        [refreshDoctorSlotDoctorSlice.pending]:(state)=> {
        },
        [refreshDoctorSlotDoctorSlice.fulfilled]:(state,action)=>{
            state.currentDoctor = action.payload
        },
        [refreshDoctorSlotDoctorSlice.rejected]:(state)=>{
        },
    }
})
export default doctorSlice.reducer