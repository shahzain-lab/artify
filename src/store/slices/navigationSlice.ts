import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface navigationSlice {
    panalRoute: number
}

const initialState: navigationSlice = {
    panalRoute: 0
}

export const navigationSlice = createSlice({
    name: 'navigationSlice',
    initialState,
    reducers: {
        setPanalRoute(state, action) {
            state.panalRoute = action.payload
        }
    }
})


// Action creators are generated for each case reducer function
export const {
    setPanalRoute
} = navigationSlice.actions;

export default navigationSlice.reducer;
