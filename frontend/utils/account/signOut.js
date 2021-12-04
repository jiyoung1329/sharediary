import pathConfigs from 'configs/path';
import router from 'next/router';

const signOut = () => {
  try {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      window.sessionStorage.clear();
      router.push(pathConfigs.default);
      // window.location.reload();
    }
  } catch (err) {
    console.error(err);
  }
};

export default signOut;
