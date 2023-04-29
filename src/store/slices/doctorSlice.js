import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const getDoctorDoctorSlice = createAsyncThunk('doctorSlice/getDoctorDoctorSlice',
    async (id)=>{
        try{
            const {data} = await axios.get(`http://localhost:5000/doctor/getDoctor/${id.doctor_id}`)
            console.log(data)
            return data
        }
        catch (e) {
            console.log(e)
        }
    })


const initialState = {
    currentDoctor: {},

    }
const doctorSlice = createSlice({
    name: 'doctor',
    initialState,
    reducers:{
            setCurrentDoctor(state,action){
                    state.currentDoctor = action.payload

        },

    },
    extraReducers:{
        [getDoctorDoctorSlice.pending]:(state)=> {
            console.log('pending')
        },
        [getDoctorDoctorSlice.fulfilled]:(state,action)=>{
            state.currentDoctor = action.payload
        },
        [getDoctorDoctorSlice.rejected]:(state)=>{
            console.log('reject')
        },
    }
})

export const {
    setCurrentDoctor
} = doctorSlice.actions
export default doctorSlice.reducer