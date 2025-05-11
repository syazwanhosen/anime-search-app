import { Routes, Route } from 'react-router-dom';

// Pages
import SearchPage from '../pages/SearchPage';
import AnimeDetail from '../pages/AnimeDetails';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/anime/:id" element={<AnimeDetail />} />
    </Routes>
);

export default AppRoutes;
