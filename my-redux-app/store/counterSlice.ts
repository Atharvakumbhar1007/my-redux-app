// Store is a combination of state, actions, and reducers
// App -> Cake
// Slice -> A slice of the cake
// Counter -> value

import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.value = state.value + 1;
        },

        decrement(state) {
            state.value = state.value - 1;
        }
    }
});

//auto generated action
export const { increment, decrement } = counterSlice.actions;
export const selectCount = (state:{counter:CounterState}) => state.counter.value;
export default counterSlice.reducer;