import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        name: ''
    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload
        }
    }
})

// Actions
export const { changeName } = loginSlice.actions;

export default loginSlice.reducer;

