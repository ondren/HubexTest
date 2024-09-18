import { configureStore } from '@reduxjs/toolkit'
import formDataReducer from '../../../features/formDataSlice/formDataSlice'
export const store = configureStore({
    reducer: {
        formData: formDataReducer
    },
})
