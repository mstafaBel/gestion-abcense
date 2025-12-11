import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-main">OFPPT</span>
        <span className="logo-sub">AL MAJD</span>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className="sidebar-link">
          Dashboard
        </NavLink>
        <NavLink to="/groups" className="sidebar-link">
          Groupes
        </NavLink>
        <NavLink to="/attendance" className="sidebar-link">
          Saisie des absences
        </NavLink>
        <NavLink to="/students" className="sidebar-link">
          Stagiaires
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
