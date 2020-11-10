import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Menu extends Component {
  render(){
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img
            src="dist/img/a.jpg"
            alt="amfhaq Logo"
            className="brand-image img-circle"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">AMF-HAQ</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/akimosis.png"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Farouk Hakim
              </a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library */}
               
              <li className="nav-header">MANAJEMEN PROYEK</li>
              
              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/daftarproyek">
                    <i className="nav-icon fas fa-hammer" />
                    <p>Daftar Proyek</p>
                  </Link>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/tambahproyek">
                    <i className="fas fa-plus nav-icon" />
                    <p>Tambah Proyek Baru</p>
                  </Link>
                  
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/daftarpekerja">
                    <i className="nav-icon fas fa-users" />
                    <p>Daftar Pekerja</p>
                  </Link>
                  
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/daftardokumen">
                    <i className="nav-icon fas fa-file" />
                  <p>Daftar Dokumen</p>
                  </Link>
                </a>
              </li>
               
              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/calendarview">
                    <i className="nav-icon fas fa-calendar-alt" />
                    <p>Calendar View</p>
                  </Link>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/mapview">
                    <i className="nav-icon far fa-map" />
                    <p>Map View</p> 
                  </Link>
                </a>
              </li>

            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    );
  }
}

export default Menu;
