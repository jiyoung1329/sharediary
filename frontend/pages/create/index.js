import React, { useEffect, useState } from 'react';

import Layout from 'components/layout';
import ButtonComponents from 'components/button';

import titleConfigs from 'configs/title';

import styles from './index.module.scss';

const createPage = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const [place, setPlace] = useState('');
  const [people, setPeople] = useState([]);
  const [tags, setTags] = useState([]);
  const [photos, setPhotos] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <Layout title={titleConfigs.createTitle}>
      <div className={styles['create-wrapper']}>
        <div className={styles['date-wrapper']}>date</div>
        <div className={styles['contents-wrapper']}>
          <div className={styles['contents-wrapper-2']}>
            <input
              className={styles['contents-title-wrapper']}
              placeholder="제목을 입력하세요 (50자 이내)."
              onChange={({ value }) => setTitle(value)}
            />
            <textarea
              className={styles['contents-text-wrapper']}
              placeholder="내용을 입력하세요(1000자 이내)."
              onChange={({ value }) => setText(value)}
            />
          </div>
        </div>
        <div className={styles['contents-wrapper']}>
          {place ? (
            place
          ) : (
            <div className={styles['add-place']}>
              <img alt="plus" src="/icons/plus.png" />
              <div>a</div>
            </div>
          )}
        </div>
        <div className={styles['contents-wrapper']}>ㅁ</div>
        <div className={styles['contents-wrapper']}></div>

        <div className={styles['contents-wrapper']}>
          {photos.length === 0 ? 0 : 1}
        </div>
        <div className={styles['button-wrapper']}>
          <ButtonComponents
            onClick={handleClick}
            label={'Create'}
            widthSize={120}
            loading={loading}
          />
        </div>
      </div>
    </Layout>
  );
};
export default createPage;
