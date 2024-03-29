import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = 'https://659428b21493b011606a090e.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
    async (_, thunkAPI) => {
    try {
        const responce = await axios.get('/contacts');
        console.log(responce)
    return responce.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
  
    })

export const addContact = createAsyncThunk('contact/addContact',
    async (contact, thunkAPI) => {
        try {
             const responce = await axios.post('/contacts', contact)
        return responce.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
       
    })

export const deleteContact = createAsyncThunk('contact,deleteContact',
    async (id, thunkAPI) => {
    try {
        const responce = await axios.delete(`/contacts/${id}`)
        return responce.data.id
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
})