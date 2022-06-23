import { useEffect } from 'react';
import { useRouter } from 'next/router';

import pathConfigs from 'configs/path';
import Auth from 'components/auth';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(pathConfigs.default);
  }, []);

  return <Auth />;
};

export default Home;
