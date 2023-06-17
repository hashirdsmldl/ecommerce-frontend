

import { Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import SignupPage from './pages/SingupPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
    <Route  path="/" element={<DashboardPage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/login" element={<LoginPage />} />
  </Routes>
  );
}

export default App;
