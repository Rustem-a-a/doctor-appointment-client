import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getUserUserSlice = createAsyncThunk('userSlice/getUserUserSlice',
    async (id)=>{
        try{
            const {data} = await axios.get(`http://localhost:5000/user/getUser/${id.user_id}`)
            console.log(data)
            return data
        }
        catch (e) {
            // alert('getListListSlice' + e.response.data.message)
            console.log(e)
        }
    })

const initialState = {
    currentUser: {},

}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setCurrentUser(state,action){
            state.currentDoctor = action.payload
            console.log(action.payload)
        },

    },
    extraReducers:{
            [getUserUserSlice.pending]:(state)=> {
                console.log('pending')
            },
            [getUserUserSlice.fulfilled]:(state,action)=>{
             state.currentUser = action.payload
            },
            [getUserUserSlice.rejected]:(state)=>{
                console.log('reject')
            },
        }
})

export const {
    setCurrentUser
} = userSlice.actions
export default userSlice.reducer