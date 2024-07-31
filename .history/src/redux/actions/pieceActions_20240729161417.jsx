import { createPiece as createPiecesFromApi} from "../../services/api"


export const createPiece = () => async (dispatch) => {
    dispatch({ type: 'FETCH_PIECES_REQUEST'})
    try{
        const data = await createPiecesFromApi()
        dispatch({ type: 'FETCH_PIECES_SUCCESS', payload: data})
    }
    catch (error) {
        dispatch({ type: 'FETCH_PIECES_FAILURE', error: error.message})
    }
}