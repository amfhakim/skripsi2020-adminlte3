import React, {Component, fragment} from 'react';
import {Link} from 'react-router-dom';

import Progress from 'react-circle-progress-bar';

class Content extends Component {
    render() {
        return(
            <div className="card">
            <div className="card-header">
              <h5 className="card-title">
                Proyek Rumah Tinggal 4X6 Bapak Yongki
              </h5>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <p className="text-center">
                    <strong>Informasi Proyek</strong>
                  </p>
                </div>
                {/* /.col */}
                <div className="col-md-4">
                  <p className="text-center">
                    <strong>Task Completion</strong>
                  </p>
                </div>
                {/* /.col */}
                <div className="col-md-4">
                  <p className="text-center">
                    <strong>Overall Completion</strong>
                  </p>
                </div>
              </div>
              {/* /.row */}
              <div className="row">
                <div className="col-md-4">
                  <div className="text"> Nama Pemilik : Bapak Yongki</div>
                  <div className="text"> Alamat : Jl. YG Lurus</div>
                  <div className="text"> No. tlp : 08232323244</div>
                  <div className="text">
                    {" "}
                    Alamat Proyek : Jl. YG Diridhoi
                  </div>
                  <div className="text"> Nama Mandor : Edy</div>
                  <div className="text"> Jumlah Pekerja : 20</div>
                </div>
                <div className="col-md-4">
                  <div>
                    <div className="progress-group">
                      Pengerjaan Pondasi
                      <span className="float-right">
                        <b>100%</b>
                      </span>
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar bg-primary"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="progress-group">
                      Pengerjaan Kamar Mandi
                      <span className="float-right">
                        <b>8%</b>
                      </span>
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar bg-danger"
                          style={{ width: "8%" }}
                        />
                      </div>
                    </div>
                    <div className="progress-group">
                      <span className="progress-text">
                        Pemasangan Keramik
                      </span>
                      <span className="float-right">
                        <b>60%</b>
                      </span>
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "60%" }}
                        />
                      </div>
                    </div>
                    <div className="progress-group">
                      Pengerjaan Plafon
                      <span className="float-right">
                        <b>50%</b>
                      </span>
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar bg-warning"
                          style={{ width: "45%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4" align="center">
                <Progress strokeWidth={11} ballStrokeWidth={11} progress={73}
                gradient={[{stop: 0.0, color: '#006400'}, {stop: 1, color: '#7CFC00'}]}/>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="row" align="center">
                <div className="col">
                    <Link to="/cobain2">
                      Lihat Selengkapnya...
                    </Link>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Content;