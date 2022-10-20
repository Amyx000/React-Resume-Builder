import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux"
import store from "./Redux/Store"
import "./index.css"
import App from './App';
import { PersistGate } from "redux-persist/integration/react"
import {persistStore} from "redux-persist"

let persistor = persistStore(store)


// ReactDOM.render(
//     <Provider store={store}>
//         <PersistGate persistor={persistor}>
//             <App />
//         </PersistGate>
//     </Provider>
//     , document.getElementById("root"));


ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);