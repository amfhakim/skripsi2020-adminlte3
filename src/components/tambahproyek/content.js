import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Content extends Component {    
    render() {
        return (
          <div className="content-wrapper">
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm">
                      <li className="breadcrumb-item">
                        <Link to="/">
                            <a>Home</a>
                        </Link>
                      </li>
                      <li className="breadcrumb-item active">Tambah Proyek</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            {/* Main content */}
            <section className="content">
              <div className="container-fluid">
                    {/* general form elements */}
                    <div className="card card-primary">
                      <div className="card-header">
                        <h3 className="card-title">Tambah Proyek</h3>
                      </div>
                      {/* /.card-header */}
                      {/* form start */}
                      <form role="form">
                        <div className="card-body">
                          
                          <div className="form-group">
                            <label>
                              Nama Proyek
                            </label>
                            <input
                              type="text"
                              className="form-control"
                            />
                          </div>
                          
                          <div className="form-group">
                            <label>
                              Nama Pemilik
                            </label>
                            <input
                              type="text"
                              className="form-control"
                            />
                          </div>
                          
                          <div className="form-group">
                            <label>
                              Alamat Proyek
                            </label>
                            <input
                              type="text"
                              className="form-control"
                            />
                          </div>

                          <div className="form-group">
                            <label>File RAB</label>
                            <div className="input-group">
                              <div className="custom-file">
                                <input
                                  type="file"
                                  className="custom-file-input"
                                  id="exampleInputFile"
                                />
                                <label
                                  className="custom-file-label"
                                  htmlFor="exampleInputFile"
                                >
                                  Choose file
                                </label>
                              </div>
                              <div className="input-group-append">
                                <span className="input-group-text" id>
                                  Upload
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                    {/* /.card */}
                  {/*/.col (right) */}
                </div>
              {/* /.container-fluid */}
            </section>
            {/* /.content */}
          </div>
        );
    }
}

export default Content;



