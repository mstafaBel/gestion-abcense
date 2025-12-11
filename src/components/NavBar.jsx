import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    // plus tard tu peux aussi faire une redirection
  };

  return (
    <header className="navbar">
      <h1 className="navbar-title">Système de gestion des absences</h1>
      <div className="navbar-user">
        <span className="user-name">
          {user ? `${user.name} (${user.role})` : 'Invité'}
        </span>
        <button className="btn-logout" onClick={handleLogout}>
          Déconnexion
        </button>
      </div>
    </header>
  );
};

export default Navbar;
