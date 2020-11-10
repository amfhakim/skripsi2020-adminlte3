import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DaftarDokumen from './daftardokumen/daftardokumen';
import DaftarProyek from './daftarproyek/daftarproyek';
import CalendarView from './calendarview/calendarview';
import MapView from './mapview/mapview';
import DaftarPekerja from './daftarpekerja/daftarpekerja';
import TambahProyek from './tambahproyek/tambahproyek';
import ProyekCard from './daftarproyek/proyekcard';
import SimpleCard from './simplecard';
import DetailProyek from './detailproyek/detailproyek';

const Remote = () => (
    <Switch>
        <Route exact path="/" component={DaftarProyek} />
        <Route path="/daftarproyek" component={DaftarProyek} />
        <Route path="/tambahproyek" component={TambahProyek}/>
        <Route path="/daftardokumen" component={DaftarDokumen} />
        <Route path="/daftarpekerja" component={DaftarPekerja}/>
        <Route path="/calendarview" component={CalendarView} />
        <Route path="/mapview" component={MapView}/>
        <Route path='/cobain' component={ProyekCard}/>
        <Route path='/cobain2' component ={DetailProyek}/>
    </Switch>
)

export default Remote;