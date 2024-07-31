import axios from "axios"


export const fetchPieces = () => async (dispatch) => {
    try{
        const response = await axios.get('/api/pieces')
        dispatch({type: 'FETCH_PIECES_SUCCESS', payload: response.data})
    }
    catch {}
}