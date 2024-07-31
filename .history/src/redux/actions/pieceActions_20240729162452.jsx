import { createPiece as createPiecesFromApi} from "../../services/api"


export const createPiece = (piece) => async (dispatch) => {
    dispatch({ type: 'FETCH_PIECES_REQUEST'})
    try{
        const data = await createPiecesFromApi(piece)
        dispatch({ type: 'FETCH_PIECES_SUCCESS', payload: data})
    }
    catch (error) {
        dispatch({ type: 'FETCH_PIECES_FAILURE', error: error.message})
    }
}

export const fetchPieces = () => async (dispatch) => {
    dispatch({ type: 'FETCH_PIECES_REQUEST' });
    try {
      const data = await fetchPiecesFromApi();
      dispatch({ type: 'FETCH_PIECES_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_PIECES_FAILURE', error: error.message });
    }
  };