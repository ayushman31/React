import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // this addItem is a reducer function takes 2 parameters : state and action. this function modiefies our state based on the action.
      //we are mutating the state over here
      state.items.push(action.payload);
      //VANILLA Redux => DON't MUTATE STATE and returning was mandatory   but in Redux Toolkit we HAVE to mutate the state.
      //const newState  = [...state];
      //newState.items.push(action.payload);
      //return newState;
      //but behind the scenes Redux is still doing the same things what Vanilla Redux used to do (the above logic) with the help of "immer" library.
      //according to RTK we either have to mutate the state or return a new state
    
    
    
    },

    removeItem: (state) => {
      state.items.pop();
    },

    clearCart: (state) => {
      //in removeItem and clearCart we dont need action so we are not writing it otherwise we can still write it but it will be of no use.
      state.items.length = 0; //here state = [] will not work
      //return {items: []};    // we can also use this i.e. either mutate (what we did on line 30 or return a new state)
    },
  },
});

export const {addItem , removeItem , clearCart} = cartSlice.actions;

export default cartSlice.reducer;
