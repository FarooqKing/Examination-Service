import React, { useState } from "react";

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div id="wrapper" className={sidebarOpen ? "wrapper" : "wrapper toggled"}>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon rotate-n-15"></div>
          <div className="sidebar-brand-text mx-3">Examination Services</div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Login</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Registeration">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Registeration</span>
          </a>
        </li>
        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item">
          <a className="nav-link" href="/CardPage">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Cards</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/home">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>
        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
            onClick={toggleSidebar}
          ></button>
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
