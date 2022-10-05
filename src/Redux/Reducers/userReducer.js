import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState:{
        userdate:{}
    },

    reducers:{
        getuserdata:(state,action)=>{
            state.userdate=action.payload
        }
    }
})

export const {getuserdata}= userSlice.actions
export default userSlice.reducer