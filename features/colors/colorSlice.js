import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    colors: 'white',
}

const colorSlice = createSlice({
    name: 'colors',
    initialState,
    reducers: {
        change: (state, action) => {
            state.colors = action.payload
        },
    },
})

export const { change } = colorSlice.actions

export default colorSlice