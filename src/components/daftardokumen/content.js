import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TabelDokumen from './tabeldokumen';
//import jsGrid from 'jsgrid';

class Content extends Component {
    
    render() {
        return (
          <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm">
                      <li className="breadcrumb-item">
                        <Link to="/">
                          <a>Home</a>
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">Daftar Dokumen</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <section className="content">
              <div className="card">
                <div className="card-body">
                  <TabelDokumen/>
                </div>
              </div>
            </section>
          </div>
        );
    }
}

export default Content;