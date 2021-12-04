import 'styles/globals.scss';
import Auth from 'components/auth';

function MyApp({ Component, pageProps }) {
  return (
    <Auth>
      <Component {...pageProps} />
    </Auth>
  );
}

export default MyApp;
