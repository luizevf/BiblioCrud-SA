import axios from "axios"

const blogAxios = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{
        "Content-Type": "applecation/json",
    meuToken:'meuToken',

    }
})

export default blogAxios;