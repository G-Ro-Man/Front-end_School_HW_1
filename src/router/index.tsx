import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TrendingFeed } from '../features/trending-feed';
import { UserProfile } from '../features/user-profile';

export const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<TrendingFeed />} />
      <Route path="user">
        <Route path=":name" element={<UserProfile />} />
      </Route>
    </Routes>
  </Router>
);
