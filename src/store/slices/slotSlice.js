import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const addSlotSlotSlice = createAsyncThunk('slotSlice/addSlotSlotSlice',
    async (dataToSend, {_, dispatch}) => {
        try {
            console.log(dataToSend)
            const {data} = await axios.post(`http://localhost:5000/slot/slotAdd`,
                dataToSend)
            dispatch(getSlotArraySlotSlice())
            return data
        } catch (e) {
            console.log(e)
        }
    })

export const getSlotArraySlotSlice = createAsyncThunk('slotSlice/getSlotArraySlotSlice',
    async () => {
        try {
            const {data} = await axios.get(`http://localhost:5000/slot/getSlots`)
            return data
        } catch (e) {
            console.log(e)
        }
    })

export const deleteSlotArraySlotSlice = createAsyncThunk('slotSlice/deleteSlotArraySlotSlice',
    async (doctorIdToDelete, {_, dispatch}) => {
        try {
            const {data} = await axios.post(`http://localhost:5000/slot/deleteSlots`, doctorIdToDelete)
            dispatch(getSlotArraySlotSlice())
            return data
        } catch (e) {
            console.log(e)
        }
    })

const initialState = {
    slotArray: [],
    isLoading: false
}

const slotSlice = createSlice({
    name: 'slot',
    initialState,
    reducers: {},
    extraReducers: {
        [getSlotArraySlotSlice.pending]: (state) => {
            state.isLoading = true
        },
        [getSlotArraySlotSlice.fulfilled]: (state, action) => {
            state.slotArray = action.payload
            state.isLoading = false
        },
        [getSlotArraySlotSlice.rejected]: (state) => {
        },

        [deleteSlotArraySlotSlice.pending]: (state) => {
            state.isLoading = true
        },
        [deleteSlotArraySlotSlice.fulfilled]: (state, action) => {
            state.isLoading = false
        },
        [deleteSlotArraySlotSlice.rejected]: (state) => {
        }
    }
})

export const {setCurrentUser} = slotSlice.actions
export default slotSlice.reducer