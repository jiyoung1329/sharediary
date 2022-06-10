import { useEffect } from 'react';
import { useRouter } from 'next/router';

import DiaryPage from 'components/diary';
import pathConfigs from 'configs/path';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(pathConfigs.default);
  }, []);

  return <DiaryPage />;
};

export default Home;
