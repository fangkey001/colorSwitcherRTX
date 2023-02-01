import { configureStore } from '@reduxjs/toolkit'
import colorSlice from '@/features/colors/colorSlice'

export const store = configureStore({
    reducer: {
        changeColor: colorSlice.reducer,
    },
})