import { configureStore } from "@reduxjs/toolkit";

    import userSlice from "./userslice";


const store=configureStore({
 reducer:   {
          auth:userSlice
    }
})
export default store;