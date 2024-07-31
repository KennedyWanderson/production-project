import { Link, Router, Routes } from "react-router-dom";
import PieceForm from "./PieceForm";

export default function Dashboard() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/PieceForm">form</Link></li>
                    </ul>
                </nav>
                <Routes>
            </div>
        </Router>
    )
}