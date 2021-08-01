import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../Redux/globalSlice";
 
export default configureStore({
  reducer: {
   global:globalReducer
  }  
})