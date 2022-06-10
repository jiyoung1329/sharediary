import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import SignPage from 'components/sign';
import SignUpPage from 'components/sign/signUp';
import LoadingView from 'components/loading';

import styles from './index.module.scss';

const Auth = ({ children }) => {
  const router = useRouter();
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

      setIsSign(true); // test
    } catch (err) {
      setIsSign(false);
      setLoading(false);
    }
  }, []);

  if (loading) return <LoadingView />;
  if (router.pathname === '/signUp') return <SignUpPage />;
  if (!isSign) {
    return <SignPage />;
  }

  return <div className={styles.container}>{children}</div>;
};
export default Auth;
