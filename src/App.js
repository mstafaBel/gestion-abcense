import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Groups from './pages/Groups';
import Attendance from './pages/Attendance';
import Students from './pages/Students';
import Layout from './components/layout';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </Layout>
  );
}

export default App;
