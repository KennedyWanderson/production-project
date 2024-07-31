import axios from "axios"


export const fetchPieces = () => async (dispatch) => {
    dispatch({ type: 'FETCH_PIECES_REQUEST'})
    try{
        const data = await fetchPiecesFromApi('/api/pieces')
        dispatch({ type: 'FETCH_PIECES_SUCCESS', payload: response.data})
    }
    catch (error) {
        dispatch({ type: 'FETCH_PIECES_FAILURE', error})
    }
}