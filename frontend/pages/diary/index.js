import React, { useEffect, useState } from 'react';
import Layout from 'components/layout';

import getToday from 'utils/date/getDate';

import titleConfigs from 'configs/title';

import styles from './index.module.scss';

const diaryPage = () => {
  const [monthYear, setMonthYear] = useState();
  const [todayDate, setTodayDate] = useState();
  const handledd = () => {};

  useEffect(() => {
    const yearName = getToday.getYear();
    const monthName = getToday.getMonthName();
    setMonthYear(`${monthName} ${yearName}`);

    const month = getToday.getMonth();
    const date = getToday.getDate();
    setTodayDate(`${month}월 ${date}일`);
  }, []);

  return (
    <Layout title={titleConfigs.diaryTitle}>
      <div className={styles['diary-wrapper']}>
        <div className={styles['left-wrapper']}>
          <div className={styles['left-head-wrapper']}>
            <i className={`bi bi-chevron-left ${styles['arrow-left']}`} />
            <div>{todayDate}</div>
            <i className={`bi bi-chevron-right ${styles['arrow-right']}`} />
          </div>
          <div className={styles['diary-wrapper']}>
            <div className={styles['diary']}></div>
            <div className={styles['diary']}></div>
            <div className={styles['diary']}></div>
            <div className={styles['diary']}></div>
          </div>
        </div>
        <div className={styles['right-wrapper']}>
          <div className={styles['right-head-wrapper']}>
            <i className={`bi bi-chevron-left ${styles['arrow-left']}`} />
            <div>{monthYear}</div>
            <i className={`bi bi-chevron-right ${styles['arrow-right']}`} />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default diaryPage;
