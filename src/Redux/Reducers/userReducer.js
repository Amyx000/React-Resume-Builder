import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState:{
        userdata:{},
    },

    reducers:{
        getuserdata:(state,action)=>{
            state.userdata=action.payload
        }
    }
})

export const {getuserdata}= userSlice.actions
export default userSlice.reducer