import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchIDs } from "./globalApi";

export const storeAddress = createAsyncThunk(
  "global/fetchIDs",
  async () => {
    const response = await fetchIDs();
    console.log(typeof(response))
    return response.data;
  }
);
const initialState = {
Id:"",
status:""
};

export const globalSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
     
   
  },
 
  extraReducers: (builder) => {
    builder
      .addCase(storeAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(storeAddress.fulfilled, (state, action) => {
        // console.log(Array.isArray(action.payload))
        state.status = "fetched";
        state.Id = action.payload;
      });
  },

});

export const { removeAll, incrCount, dcrCount } = globalSlice.actions;
export default globalSlice.reducer;
