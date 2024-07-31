import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Link, Route, Router } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import PieceForm from './Components/PieceForm';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div>
            <nav>
              <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/PieceForm">Component 1</Link></li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/PieceForm" element={<PieceForm />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
