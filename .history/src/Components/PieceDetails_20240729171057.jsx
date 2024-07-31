import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function PieceDetails() {

    const { id } = useParams()
    const [piece, setPiece] = useState(null)

    useEffect(() => {
        const FetchPiece = async () => {
            try {
                const response = await axios.get(`/api/pieces/${id}`);
                setPiece(response.data);
            } catch (error) {
                console.error('Error fetching piece details', error);
            }
        }

        FetchPiece()
    }, [id])

    if(!piece) return <p>loading</p>


    return (
        <div>
            <h1>Detalhes da Peça</h1>
            <p>ID: {piece.id}</p>
            <p>Número de Série: {piece.serialNumber}</p>
            <p>Quantidade: {piece.quantity}</p>
            <p>Observação: {piece.observation}</p>
        </div>
    )
}