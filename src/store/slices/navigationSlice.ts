import { createSlice } from "@reduxjs/toolkit";

interface navigationSlice {
    panalRoute: number
    openMobileMenu: boolean
}

const initialState: navigationSlice = {
    panalRoute: 0,
    openMobileMenu: false
}

export const navigationSlice = createSlice({
    name: 'navigationSlice',
    initialState,
    reducers: {
        setPanalRoute(state, action) {
            state.panalRoute = action.payload
        },
        setOpenMobileMenu(state, action) {
            state.openMobileMenu = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    setPanalRoute,
    setOpenMobileMenu
} = navigationSlice.actions;

export default navigationSlice.reducer;
