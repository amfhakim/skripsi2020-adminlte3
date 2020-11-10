import React, { Component } from 'react';
import MUIDataTable from 'mui-datatables';

const columns = ["No. Dokumen", "Nama Dokumen", "Nama Proyek",  "Tanggal dibuat", "Tanggal diedit"];

const data = [
 ["AR112", "Gambar Desain Lantai Dasar", "Kantor PT Angkasa Raya", "22/12/2018", "22/12/2018"],
 ["AR311", "Tagihan Pengerjaan Lantai Dasar", "Kantor PT Angkasa Raya", "23/05/2019", "23/05/2019"],
 ["RH111", "Gambar Desain Kamar Mandi", "Rumah Bapak Hasan", "30/11/2018", "31/11/2018"],
 ["RH001", "Penawaran Proyek", "Rumah Bapak Hasan", "01/11/2018", "03/11/2018"],
];

const options = {
  filterType: 'checkbox',
};

class TabelDokumen extends Component {
    render() {
        return (
            <MUIDataTable 
            title={"Daftar Dokumen"} 
            data={data} 
            columns={columns} 
            options={options} 
            />
        )
    }
}

export default TabelDokumen;