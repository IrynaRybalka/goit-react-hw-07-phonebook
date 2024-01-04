import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactSlice";
import { filterReducer } from "./filterSlice";
// import { REGISTER } from "redux-persist/es/constants";



export const store = configureStore({
   reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
   }
})
