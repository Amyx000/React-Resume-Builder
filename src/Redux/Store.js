import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit"
import themeReducer from "./Reducers/themeReducer"
import userReducer from "./Reducers/userReducer"
import storage from "redux-persist/lib/storage"
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from "redux-persist"

const persistConfig = {
    key: 'root',
    storage,
}
const reducer = combineReducers({
    user: userReducer,
    theme: themeReducer
})

const persistedReducer = persistReducer(persistConfig,reducer)

export default configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
})