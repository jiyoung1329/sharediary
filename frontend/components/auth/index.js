import React, { useEffect, useState } from 'react';

import SignPage from 'components/sign';
import LoadingView from 'components/loading';

const Auth = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isSign, setIsSign] = useState(false);

  useEffect(() => {
    try {
      const { userInfo } = window.sessionStorage;
      if (userInfo) {
        setIsSign(true);
      } else {
        setIsSign(false);
      }
      setLoading(false);
    } catch (err) {
      setIsSign(false);
      setLoading(false);
    }
  }, []);

  if (loading) return <LoadingView />;
  if (!isSign) {
    return <SignPage />;
  }

  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
export default Auth;
