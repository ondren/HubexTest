import { createSlice } from '@reduxjs/toolkit'
import { currentDate } from '../../shared/consts/consts.js'

const initialState = {
    FIRST_NAME: '',
    LAST_NAME: '',
    BIO: '',
    COUNTRY: '',
    CITY: '',
    ADDRESS: '',
    DATE: '',
}

const formDataSlice = createSlice({
    name: 'formData',
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.FIRST_NAME = action.payload
        },
        setLastName: (state, action) => {
            state.LAST_NAME = action.payload
        },
        setBio: (state, action) => {
            state.BIO = action.payload
        },
        setCountry: (state, action) => {
            state.COUNTRY = action.payload
        },
        setCity: (state, action) => {
            state.CITY = action.payload
        },
        setAddress: (state, action) => {
            state.ADDRESS = action.payload
        },
        setDate: (state) => {
            state.DATE = `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}/${currentDate.getHours()}/${currentDate.getMinutes()}`
        },
    },
})


export const {setFirstName, setLastName, setBio,setCountry, setCity, setAddress, setDate} = formDataSlice.actions
export default formDataSlice.reducer