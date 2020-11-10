import React from 'react';
import Scheduler from 'devextreme-react/scheduler';
import { data } from './data.js';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

const currentDate = new Date(2017, 4, 25);
const views = ['day', 'week', 'workWeek', 'month'];

class CalendarView extends React.Component {
  render() {
    return (
      <Scheduler
        dataSource={data}
        views={views}
        defaultCurrentView="day"
        defaultCurrentDate={currentDate}
        height={600}
        startDayHour={9} />
    );
  }
}

export default CalendarView;