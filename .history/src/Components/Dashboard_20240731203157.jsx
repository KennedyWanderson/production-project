import PieceDetails from "./PieceDetails";
import PieceForm from "./PieceForm";

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Visão geral da produção.</p>
            <button><PieceForm/></button>
        </div>
    )
}