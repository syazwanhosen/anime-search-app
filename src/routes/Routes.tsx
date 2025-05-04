import { Routes, Route } from 'react-router-dom';

// Components
import SearchPage from '../pages/SearchPage';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<SearchPage />} />
    </Routes>
);

export default AppRoutes;
