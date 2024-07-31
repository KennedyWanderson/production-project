const init

export default function pieceReducer(){
    switch (action.type) {
        case 'FETCH_PIECES_SUCCESS':
          return { ...state, pieces: action.payload, loading: false };
        case 'FETCH_PIECES_FAILURE':
          return { ...state, error: action.error, loading: false };
        default:
          return state;
    }
}