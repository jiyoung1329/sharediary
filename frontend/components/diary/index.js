import React, { useEffect, useState } from 'react';

import Layout from 'components/layout';
import DiaryListItem from 'components/listItem/diary';
import CalendarComponent from 'components/calendar';

import getToday from 'utils/date/getDate';

import titleConfigs from 'configs/title';

import styles from './index.module.scss';

const DiaryPage = () => {
  const [data, setData] = useState([]);
  const [monthYear, setMonthYear] = useState();
  const [todayDate, setTodayDate] = useState();

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
            {data.length === 0
              ? '작성한 다이어리가 없습니다.'
              : data.map((diary) => {
                  <DiaryListItem info={diary} />;
                })}
          </div>
        </div>
        <div className={styles['right-wrapper']}>
          <div className={styles['calendar-wrapper']}>
            <CalendarComponent />
          </div>
          {/* <div className={styles['right-head-wrapper']}>
            <i className={`bi bi-chevron-left ${styles['arrow-left']}`} />
            <div>{monthYear}</div>
            <i className={`bi bi-chevron-right ${styles['arrow-right']}`} />
          </div> */}
        </div>
      </div>
    </Layout>
  );
};
export default DiaryPage;
