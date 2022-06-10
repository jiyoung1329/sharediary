/* eslint-disable array-callback-return */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';

import DiaryListItem from 'components/listItem/diary';
import CalendarComponent from 'components/calendar';
import Helmet from 'components/helmet';
import NavComponent from 'components/nav';

import getToday from 'utils/date/getDate';

import titleConfigs from 'configs/title';
import styles from './index.module.scss';

const DiaryPage = () => {
  const todayDate = `${getToday.getMonth()}월 ${getToday.getDate()}일`;

  const [data, setData] = useState([]);

  useEffect(() => {
    // 다이어리 데이터 가져오기
    // setData
  }, []);

  return (
    <>
      <Helmet title={titleConfigs.diaryTitle} />
      <NavComponent />
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
        </div>
      </div>
    </>
  );
};
export default DiaryPage;
