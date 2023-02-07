import { createSlice } from "@reduxjs/toolkit";


const productsListSlice = createSlice({
  name: 'products',
  initialState: {
    productsList: []
  },
  reducers: {
    setProducts: (state, action)=>{
      state.productsList= []
      state.productsList.push(action.payload)
    }
  }
})

export const {setProducts} = productsListSlice.actions;
export default productsListSlice.reducer;