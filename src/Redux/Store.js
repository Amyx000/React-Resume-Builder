import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./Reducers/userReducer"

export default configureStore({
    reducer:{
        user:userReducer
    }
})