import { createPieces as fetchPiecesFromApi} from "../../services/api"


export const fetchPieces = () => async (dispatch) => {
    dispatch({ type: 'FETCH_PIECES_REQUEST'})
    try{
        const data = await fetchPiecesFromApi()
        dispatch({ type: 'FETCH_PIECES_SUCCESS', payload: data})
    }
    catch (error) {
        dispatch({ type: 'FETCH_PIECES_FAILURE', error: error.message})
    }
}