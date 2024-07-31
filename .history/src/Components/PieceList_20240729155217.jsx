import axios from "axios"
import { useEffect, useState } from "react"

export default function PieceList() {
    const dispatch

    const [pieces, setPieces] = useState([])

    useEffect( async () => {
        try {
            const response = await axios.get('/api/pieces')
            setPieces(response.data)
        } catch (error)
        {
            console.log(error)
        }
    })

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