import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        name: '',
        isGuest: false
    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload
        },
        changeIsGuest: (state, action) => {
            state.isGuest = action.payload
        }
    }
})

// Actions
export const { changeName, changeIsGuest } = loginSlice.actions;

export default loginSlice.reducer;

