import React, { useState } from 'react';

import Helmet from 'components/helmet';
import NavComponent from 'components/nav';
import ButtonComponents from 'components/button';
import TextEditor from 'components/textEditor';

import titleConfigs from 'configs/title';

import styles from './index.module.scss';

const createPage = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [place, setPlace] = useState('');
  const [people, setPeople] = useState([]);
  const [photos, setPhotos] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <>
      <Helmet title={titleConfigs.createTitle} />
      <NavComponent />
      {/* <TextEditor /> */}
      <div className={styles['create-wrapper']}>
        <div className={styles['date-wrapper']}>date</div>
        <div className={styles['contents-wrapper']}>
          <div className={styles['contents-wrapper-2']}>
            <input
              className={styles.title}
              placeholder="제목을 입력하세요 (50자 이내)."
              onChange={({ value }) => setTitle(value)}
            />
            <textarea
              className={styles.text}
              placeholder="내용을 입력하세요(1000자 이내)."
              onChange={({ value }) => setText(value)}
            />
          </div>
        </div>
        {/* <div className={styles['contents-wrapper']}>
          {place ? (
            place
          ) : (
            <div className={styles['add-place']}>
              <img alt="plus" src="/icons/plus.png" />
              <div>장소</div>
            </div>
          )}
        </div> */}
        <div className={styles['contents-wrapper']}>사람</div>
        <div className={styles['contents-wrapper']}>태그</div>

        <div className={styles['contents-wrapper']}>사진</div>
        <div className={styles['button-wrapper']}>
          <ButtonComponents
            onClick={handleClick}
            label="Create"
            widthSize={120}
            heightSize={40}
            loading={loading}
          />
        </div>
      </div>
    </>
  );
};
export default createPage;
