import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3001'
})

export const fetchPieces = async () => {
    const response = await api.get('/pieces')
    return response.data
}

export const cretePieces = async (piece) => {
    const response = await api.post('/pieces', piece)
    return response.data
}

export default api