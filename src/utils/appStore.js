import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore = configureStore({
    // big reducer, consist of many small/individual reducers from cartSlice.js file
    reducer: {
        // cart name comes from cartSlice. cartReducer
        cart : cartReducer,
        
    }

});

export default appStore;