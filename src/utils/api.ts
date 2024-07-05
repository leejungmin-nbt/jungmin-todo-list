import axios from "axios";

const baseApi = axios.create({
    baseURL: 'http://localhost:3000/nbt'
})

export const getItems = async() => {
    const res = await baseApi.get('/items');

    return res.data;
}

export const addItem = async() => {
    const res = await baseApi.post('/items');

    return res.data;
}

export const updateItem = async() => {
    const res = await baseApi.put('/items');

    return res.data;
}

export const deleteItem = async() => {
    const res = await baseApi.delete('/items');

    return res.data;
}