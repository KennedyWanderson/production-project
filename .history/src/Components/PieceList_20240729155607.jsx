import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPieces } from "../redux/actions/pieceActions"

export default function PieceList() {
    const dispatch = useDispatch()

    const { pieces, loading, error} = useSelector((state) => state.pieces)


    useEffect(() => {
        dispatch(fetchPieces())
    }, [dispatch])


    
    return (
        <div>
            <h1>Lista de Peças</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Número de Série</th>
                        <th>Quantidade</th>
                        <th>Observação</th>
                    </tr>
                </thead>
                <tbody>
                    {pieces.map((piece) => (
                        <tr key={piece.id}>
                            <td>{piece.id}</td>
                            <td>{piece.serialNumber}</td>
                            <td>{piece.quantity}</td>
                            <td>{piece.observation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}