import { createSlice } from "@reduxjs/toolkit";
import reducer from "./userSlice";

const connectionSlice = createSlice({
    name: "connections",
    initialState: {
        connections: null
    },
    reducers: {
        addConnections(state, action) {
            state.connections = action.payload
        }
    }

})

export const { addConnections } = connectionSlice.actions;

export default connectionSlice.reducer;