import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
//Read the comments to understand this:-
//1.  createSlice--> It accepts an object of reducer function, slice name, and initial state value
// automatically generates a slice reducer with corresponding action creator and action type.

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // 2. Note:-So, Redux Toolkit allows us to write "mutating" logic in reducers.
      // It doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state, action) => {
      console.log(action, "abc");
      //i.e. payload: udefined , type: "counter/decrement"
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log(action);
      //3. It returns action.type and action.payload
      //i.e. payload: 10 , type: "counter/incrementByAmount"
      state.value += action.payload;
    },
  },
});

//4. Action creators are generated for each case reducer function, which is used to dispatch the action
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
