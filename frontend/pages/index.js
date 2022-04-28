import { useEffect } from 'react';
import { useRouter } from 'next/router';
import pathConfigs from 'configs/path';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(pathConfigs.default);
  }, []);

  return null;
};

export default Home;
