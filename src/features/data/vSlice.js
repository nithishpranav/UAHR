import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
const initialState = {
    vaccine: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
}
export const vSlice = createSlice({
    name: 'vSlice',
    initialState,
    reducers: {
        reset: (state) =>initialState
    }
})

export const {reset} = vSlice.actions
export default vSlice.reducer