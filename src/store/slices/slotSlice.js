import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const addSlotSlotSlice = createAsyncThunk('slotSlice/addSlotSlotSlice',
    async (dataToSend)=>{
        try{
            console.log(dataToSend)
            const {data} = await axios.post(`http://localhost:5000/slot/slotAdd`,
                dataToSend)
            console.log(data)
            return data
        }
        catch (e) {
            console.log(e)
        }
    })
export const getSlotArraySlotSlice = createAsyncThunk('slotSlice/getSlotArraySlotSlice',
    async ()=>{
        try{
            const {data} = await axios.get(`http://localhost:5000/slot/getSlots`)
            console.log(data)
            return data
        }
        catch (e) {
            console.log(e)
        }
    })

const initialState = {
    slotArray: [],

}
const slotSlice = createSlice({
    name: 'slot',
    initialState,
    reducers:{},
    extraReducers:{
        [getSlotArraySlotSlice.pending]:(state)=> {
            console.log('pending')
        },
        [getSlotArraySlotSlice.fulfilled]:(state,action)=>{
            state.slotArray = action.payload
        },
        [getSlotArraySlotSlice.rejected]:(state)=>{
            console.log('reject')
        }
    }
})

export const {
    setCurrentUser
} = slotSlice.actions
export default slotSlice.reducer