import Auth from 'components/auth';

import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/list/main.css';

import 'styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Auth>
      <Component {...pageProps} />
    </Auth>
  );
}

export default MyApp;
