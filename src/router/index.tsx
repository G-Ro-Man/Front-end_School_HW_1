import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TrendingFeed } from '../features/trending-feed/TrendingFeed';
import { UserProfile } from '../features/user-profile/UserProfile';

export const AppRouter: FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<TrendingFeed />} />
      <Route path="user">
        <Route path=":name" element={<UserProfile />} />
      </Route>
    </Routes>
  </Router>
);
