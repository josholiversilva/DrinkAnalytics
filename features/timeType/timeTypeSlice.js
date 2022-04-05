import { createSlice } from '@reduxjs/toolkit'

export const timeTypeSlice = createSlice({
    name: "timeType",
    initialState: {
        time: 'w',
        offset: {
            'w': 0,
            'm': 0,
            'y': 0
        },
        timeDate: {
            'w': '',
            'm': '',
            'y': ''
        }
    },
    reducers: {
        switchTimeType: (state, action) => {
            state.time = action.payload
        },
        changeOffset: (state, action) => {
            state.offset[state.time] += action.payload
        },
        changeTimeDate: (state, action) => {
            state.timeDate[state.time] = action.payload
        }
    }
})

// Actions
export const { switchTimeType, changeOffset, changeTimeDate } = timeTypeSlice.actions;

export default timeTypeSlice.reducer;