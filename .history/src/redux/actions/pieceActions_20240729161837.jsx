import { createPiece as createPieceFromApi } from '../../services/api';

export const createPiece = (piece) => async (dispatch) => {
  try {
    const data = await createPieceFromApi(piece);
    dispatch({ type: 'CREATE_PIECE_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'CREATE_PIECE_FAILURE', error: error.message });
  }
};
