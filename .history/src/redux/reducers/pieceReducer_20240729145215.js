const initialState = {
    pieces: [],
    loading: false,
    error: null
}

export default function pieceReducer(state = initialState, action){
    switch (action) {
        case 'FETCH_PIECES_SUCCESS':
          return { ...state, pieces: action.payload, loading: false };
        case 'FETCH_PIECES_FAILURE':
          return { ...state, error: action.error, loading: false };
        default:
          return state;
    }
}