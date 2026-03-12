import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name: "request",
    initialState: {
        request: null,
    },
    reducers: {
        addRequest(state, action) {
            state.request = action.payload;
        }
    }
})


export const { addRequest } = requestSlice.actions;

export default requestSlice.reducer;