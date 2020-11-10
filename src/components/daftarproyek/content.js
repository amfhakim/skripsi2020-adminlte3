import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import ProyekCard from './proyekcard';
import daftarproyek from '../../db/daftarproyek.json';

class Content extends Component {
  state = {
    post: []
}


   componentDidMount(){
    this.setState({post: daftarproyek})
  }

    render() {
        return(
          <Fragment>
          <div className="content-wrapper">            
            
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
                      <li className="breadcrumb-item active">Daftar Proyek</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            
            {/*Main Content*/}
            <section className="content">
              <div className="container-fluid">
                {/*Card Proyek 1 */}
                <div className="row">
                  <div className="col-md-12">
                    {
                      this.state.post.map(post => {
                        return <ProyekCard title={post.title}
                    namaPemilik={post.NamaPemilik}
                    Alamat={post.Alamat}
                    noTelepon={post.NoTelepon}
                    namaMandor={post.NamaMandor}
                    jumlahPekerja={post.JumlahPekerja} />
                      })
                    }
                    
                  </div>
                </div>
              </div>
            </section>

          </div>
          </Fragment>
          
        )
    }
}

export default Content;