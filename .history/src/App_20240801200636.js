import './App.css';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
