import {configureStore} from "@reduxjs/toolkit"
import themeReducer from "./Reducers/themeReducer"
import userReducer from "./Reducers/userReducer"

export default configureStore({
    reducer:{
        user:userReducer,
        theme:themeReducer
    }
})