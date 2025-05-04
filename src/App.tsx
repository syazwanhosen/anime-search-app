import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Routes';

// Components
import TopBar from './components/TopBar';

function App() {
  return (
    <Router>
      <TopBar />
      <AppRoutes />
    </Router>
  );
}

export default App;
