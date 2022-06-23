import React, { useEffect, useState } from 'react';
import router from 'next/router';

import SignInputComponents from 'components/input/sign';
import LoadingButton from 'components/button/loadingButton';
import SignUpButton from 'components/button/signUp';
import Helmet from 'components/helmet';

import titleConfigs from 'configs/title';
import pathConfigs from 'configs/path';
import errorConfigs from 'configs/error';

import signIn from 'utils/account/signIn';
import saveSessionStorage from 'utils/account/saveUserInfo';

import styles from './index.module.scss';

const SignPage = () => {
  const [loading, setLoading] = useState(false);

  const [id, setId] = useState();
  const [pwd, setPwd] = useState();

  const handleSignIn = async () => {
    if (!id || !pwd) {
      return alert('모든 값을 입력해주세요.');
    }
    setLoading(true);

    const onSuccess = (data) => {
      if (
        data.non_field_errors &&
        data.non_field_errors[0] === errorConfigs.incorrect.code
      ) {
        setLoading(false);
        return alert(errorConfigs.incorrect.msg);
      }
      saveSessionStorage(data);
      router.reload();
    };

    const signInfo = { username: id, password: pwd };

    const a = await signIn(signInfo);

    if (!a) {
      alert('다시 시도해주세요.');
      setLoading(false);
    } else onSuccess(a);
  };

  const handleSignUp = () => {
    router.push(pathConfigs.signUp);
  };

  return (
    <>
      <Helmet title={titleConfigs.defaultTitle} />
      <div className={styles['sign-wrapper']}>
        <div className={styles['sign-in-wrapper']}>
          <div className={styles.title}>Sign In</div>
          <SignInputComponents
            type="text"
            placeholder="ID"
            value={id}
            heightSize={40}
            widthSize={350}
            onChange={({ target: { value } }) => setId(value)}
          />
          <SignInputComponents
            type="password"
            placeholder="PASSWORD"
            value={pwd}
            heightSize={40}
            widthSize={350}
            onChange={({ target: { value } }) => setPwd(value)}
          />
          <LoadingButton
            loading={loading}
            label="Login"
            heightSize={40}
            widthSize={350}
            onClick={handleSignIn}
          />
        </div>
        <div className={styles['sign-up-wrapper']}>
          <div className={styles.title}>안녕하세요 !</div>
          <div className={styles.text}>나만의 다이어리를 작성해보아요.</div>
          <SignUpButton
            onClick={handleSignUp}
            label="Sign up"
            heightSize={40}
            widthSize={350}
          />
        </div>
      </div>
    </>
  );
};

export default SignPage;
