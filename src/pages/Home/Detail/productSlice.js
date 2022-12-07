import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchProduct = createAsyncThunk(
  "product/get",
  async () => {
    const data = await (await fetch('http://localhost:8000/products')).json()
    return data
  }
)

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state = action.payload
      return state
    })
  }
})

export default productSlice