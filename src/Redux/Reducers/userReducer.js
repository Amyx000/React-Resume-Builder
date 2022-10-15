import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:"user",
    initialState:{
        userdata:{},
    },

    reducers:{
        getuserdata:(state,action)=>{
            state.userdata=action.payload
        },
        clruserdata:(state,action)=>{
            state.userdata={}
        }
    }
})

export const {getuserdata,clruserdata}= userSlice.actions
export default userSlice.reducer