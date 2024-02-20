import { ILibrary, IOrg, IProject } from "@/app/app.interface";
import library from "@/model/library";
import orgs from "@/model/orgs";
import { createSlice } from "@reduxjs/toolkit";

interface workspaceSlice {
    orgs: IOrg[]
    selectedOrg: IOrg
    project: IProject
    library: ILibrary[]
}

const initialState: workspaceSlice = {
    orgs: [],
    selectedOrg: orgs[0],
    project: orgs[0].projects[0],
    library: library
}

export const workspaceSlice = createSlice({
    name: 'workspaceSlice',
    initialState,
    reducers: {
        loadOrgs: (state, action) => {
            state.orgs = [...orgs, action.payload]
        },
        setSelectedOrg: (state, action) => {
            state.selectedOrg = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    loadOrgs,
    setSelectedOrg
} = workspaceSlice.actions;

export default workspaceSlice.reducer;
