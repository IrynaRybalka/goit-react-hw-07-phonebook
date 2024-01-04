import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
// import { nanoid } from 'nanoid';


// const contactsInitialState = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ];


  const contactsSlice = createSlice ({
    name: "contacts",
    initialState: {
        item: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => { 
      builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.item = action.payload;
      })

      .addCase(fetchContacts.rejected, (state, action)=> {
        state.error = action.payload;
        state.isLoading = false;
      }) 
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })

      .addCase(addContact.fulfilled, (state, action) =>{
        state.isLoading = false;
        state.error = null;
        state.item.push(action.payload);
      })
      
      .addCase(addContact.rejected,(state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.item = state.item.filter(contact => contact.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
    },
})

  export const contactsReducer = contactsSlice.reducer;