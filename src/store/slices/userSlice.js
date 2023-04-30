import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getUserUserSlice = createAsyncThunk('userSlice/getUserUserSlice',
    async (id) => {
        try {
            const {data} = await axios.get(`http://localhost:5000/user/getUser/${id.user_id}`)
            return data
        } catch (e) {
            console.log(e)
        }
    })

const initialState = {
    currentUser: {},

}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser(state, action) {
            state.currentDoctor = action.payload
        },

    },
    extraReducers: {
        [getUserUserSlice.pending]: (state) => {
        },
        [getUserUserSlice.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [getUserUserSlice.rejected]: (state) => {
        },
    }
})

export const {setCurrentUser} = userSlice.actions
export default userSlice.reducer