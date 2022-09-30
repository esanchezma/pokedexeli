import { configureStore } from "@reduxjs/toolkit";
import userTrainer from "./slice/userTrainer.slice";
import isDarkSlice from "./slice/isDark.slice";

export default configureStore({
    reducer:{
        userTrainer,
        isDark: isDarkSlice
    }
})