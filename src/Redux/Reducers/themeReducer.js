import {createSlice} from "@reduxjs/toolkit"

const themeSlice = createSlice({
    name:"theme",
    initialState:{},

    reducers:{
        getthemedata:(state,action)=>{
            state.theme=action.payload
        }
    }
})

export const {getthemedata}= themeSlice.actions
export default themeSlice.reducer