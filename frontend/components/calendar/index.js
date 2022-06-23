import React from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
// import listPlugin from '@fullcalendar/list';

const CalendarComponent = () => {
  // return 'hi';
  const initialView = 'dayGridMonth';
  const plugins = [dayGridPlugin];
  const headerToobar = {
    center: 'title',
    left: 'prev',
    right: 'next',
  };
  return (
    <FullCalendar
      plugins={plugins}
      headerToolbar={headerToobar}
      initialView={initialView}
      // initialEvents={events}
      // eventClick={onClick}
    />
  );
};

export default CalendarComponent;
