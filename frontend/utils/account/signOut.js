import router from 'next/router';

const signOut = () => {
  if (window.confirm('로그아웃 하시겠습니까?')) {
    router.push('/');
  }
};

export default signOut;
