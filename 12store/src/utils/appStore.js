import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer : {        // this whole big reducer is our app Reducer which contains small reducers of each slice 
        cart : cartReducer,
    },
});

export default appStore;