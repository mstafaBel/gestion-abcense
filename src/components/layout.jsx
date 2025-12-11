import React from 'react';
import Sidebar from './SideBar';
import Navbar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
