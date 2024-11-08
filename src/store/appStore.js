import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import calculatorReducer from "./calculatorSlice";
import todoReducer from "./todoSlice";
import weatherReducer from "./weatherSlice";

export const appStore = configureStore({
    reducer : {
        counter : counterReducer,
        calculator : calculatorReducer,
        todo : todoReducer,
        weather : weatherReducer, 
    }, 
}); 