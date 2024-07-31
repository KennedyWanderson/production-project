import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3001'
})

export const fetchPieces = async () => {
    const responde = await api.get('/pieces')
    return response.data
}

export default api