import { createSlice } from '@reduxjs/toolkit'

export const timeTypeSlice = createSlice({
    name: "timeType",
    initialState: {
        time: 'w'
    },
    reducers: {
        switchTimeType: (state, action) => {
            state.time = action.payload
        }
    }
})

// Actions
export const { switchTimeType } = timeTypeSlice.actions;

export default timeTypeSlice.reducer;