import React, { Component } from 'react';
import MUIDataTable from 'mui-datatables';

const columns = ["Nama Pekerja", "Keahlian", "Nama Proyek"];

const data = [
 ["Jupri", "Pengerjaan keramik", "Kantor PT Angkasa Raya"],
 ["Narto", "Supervisor", "Kantor PT Angkasa Raya"],
 ["Edy", "Mandor", "Rumah Bapak Hasan",],
 ["Samin", "Kenek", "Rumah Bapak Hasan",],
];

const options = {
  filterType: 'checkbox',
};

class TabelDokumen extends Component {
    render() {
        return (
            <MUIDataTable
            title={"Daftar Pekerja"} 
            data={data} 
            columns={columns} 
            options={options} 
            />
        )
    }
}

export default TabelDokumen;