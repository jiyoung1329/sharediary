import React from 'react';
import Auth from 'components/auth';

import 'styles/globals.scss';

import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/list/main.css';
import 'styles/calendar.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Auth>
      <Component {...pageProps} />
    </Auth>
  );
}

export default MyApp;
