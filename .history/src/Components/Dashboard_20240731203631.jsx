import { Link, Router } from "react-router-dom";

export default function Dashboard() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to={}>Dashboard</Link></li>
                    </ul>
                </nav>
            </div>
        </Router>
    )
}