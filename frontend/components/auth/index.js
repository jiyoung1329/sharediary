import React, { useEffect, useState } from 'react';
import router, { useRouter } from 'next/router';

import SignPage from 'components/sign';
import pathConfigs from 'configs/path';
// import SignPage from 'pages/sign';

const Auth = ({ children }) => {
  const { pathname } = useRouter();
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const { userInfo } = window.sessionStorage;
      if (userInfo) {
        setLogged(true);
      }
    } catch (err) {
      console.error(err);
      setLogged(false);
      setLoading(false);
    }
  }, []);

  // if (pathname !== '/') router.push(pathConfigs.default);

  // if (loading) return <LoadingView />;
  if (!logged) {
    // router.push(pathConfigs.default);
    return <SignPage />;
  }

  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
export default Auth;
