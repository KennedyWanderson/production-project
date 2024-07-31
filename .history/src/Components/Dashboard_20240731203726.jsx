import { Link, Router } from "react-router-dom";
import Piee

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
            </div>
        </Router>
    )
}