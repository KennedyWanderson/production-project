import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Routes from './routes';
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
                <li><Link to="/component1">Component 1</Link></li>
                <li><Link to="/component2">Component 2</Link></li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/component1" element={<PieceForm />} />
              <Route path="/component2" element={<Component2 />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
