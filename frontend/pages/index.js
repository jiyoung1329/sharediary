import DiaryPage from 'components/diary';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home = () => {
  // const router = useRouter();

  // useEffect(() => {
  //   router.push('/');
  // }, []);

  return <DiaryPage />;
  // return null;
};

export default Home;
