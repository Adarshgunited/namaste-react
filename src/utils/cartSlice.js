import { createSlice } from "@reduxjs/toolkit";

// imagine cartSlice is a big object.
//createSlice is for making config for our cartSlice. it has initially a name, initialState, and reducers.
const cartSlice = createSlice({
    name: 'cart',
    // what will be the cart items initially
    // initial state is empty(cart is empty)
    initialState: {
        items: [],
    },
    //fn to modify the items
    reducers: {
        //addItem is a single slice
        // action is an object and it store the data(in form of "payload")
        addItem : (state,action) => {
            // got an items and added
            //We have to mutating/modify the state (redux toolkit)
            state.items.push(action.payload);
            // console.log(action);
        },
        // no need action, another slice
        removeItem : (state) => {
            //remove from end
            state.items.pop();
        },
        // originalState = {items:["pizza"]};
        clearCart : (state) => {
            // clear the cart items = 0
            state.items.length = 0;
            // return { items: []};//this work. this new object will be replaced inside originalState = []
            // state = ["akshay"] // ... this will not work. their is a reason.
        }
    },
})

// export actions
export const {addItem, removeItem, clearCart} = cartSlice.actions;

// here we r only exporting the reducers.
export default cartSlice.reducer;