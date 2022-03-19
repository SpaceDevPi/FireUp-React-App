import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


// Get investor from localStorage
const investor = JSON.parse(localStorage.getItem('investor'))

const initialState = {
    investor: investor ? investor : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  }

  export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = false
        state.message = ''
      },
    },
    extraReducers: () => {
     
    },
  })
  
  export const { reset } = authSlice.actions
  export default authSlice.reducer