import Auth from 'components/auth';

import '@fullcalendar/common/main.css';
import '@fullcalendar/react'; // must go before plugins
import '@fullcalendar/daygrid'; // a plugin!

import 'styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Auth>
      <Component {...pageProps} />
    </Auth>
  );
}

export default MyApp;
