import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isNavOpen: false
}

const misc = createSlice({
    name: "misc", 
    initialState,
    reducers: {
        setIsNavOpen : (state, action) => {
            console.log("reducer triggerd");
            console.log(action.payload);
            state.isNavOpen = action.payload;
            return state;
        }
    }
})

export const {setIsNavOpen} = misc.actions;
export default misc.reducer;