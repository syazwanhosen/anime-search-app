import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes';
import { Provider } from 'react-redux';
import { store } from './store';

// Components
import TopBar from './components/TopBar';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <TopBar />
        <AppRoutes />
      </Router>
    </Provider>

  );
}

export default App;
