import React from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import koLoc from '@fullcalendar/core/locales/ko';

const CalendarComponent = () => {
  // return 'hi';
  const initialView = 'dayGridMonth';
  const plugins = [dayGridPlugin, listPlugin];
  const headerToobar = {
    center: 'title',
    left: 'dayGridMonth,listWeek',
    right: 'today prev,next',
  };
  return (
    <FullCalendar
      plugins={plugins}
      headerToolbar={headerToobar}
      initialView={initialView}
      // initialEvents={events}
      // eventClick={onClick}
      // locale={koLoc}
    />
  );
};

export default CalendarComponent;
