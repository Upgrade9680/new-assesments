// src/api/contacts.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getContacts = () => API.get('/contacts');
export const createContact = (data) => API.post('/contacts', data);
export const updateContact = (id, data) => API.put(`/contacts/${id}`, data);
export const deleteContact = (id) => API.delete(`/contacts/${id}`);

console.log('this is our api', getContacts);
