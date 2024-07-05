import { ITodosItem } from "@/types/todos";
import axios from "axios";

const baseApi = axios.create({
    baseURL: 'http://localhost:3000/api'
})

export const getItems = async() => {
    const res = await baseApi.get('/todos');

    return res.data;
}

export const addItem = async(todo: ITodosItem) => {
    const res = await baseApi.post('/todos', todo);
    console.log('res >> ', res)
    return res.data;
}

export const updateItem = async() => {
    const res = await baseApi.put('/todos');

    return res.data;
}

export const deleteItem = async() => {
    const res = await baseApi.delete('/todos');

    return res.data;
}