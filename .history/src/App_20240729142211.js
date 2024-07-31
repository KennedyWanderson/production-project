import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes 
      </Provider>
    </div>
  );
}

export default App;
