import styles from './diary.module.scss';

const DiaryListItem = ({ info }) => {
  const { time, title, text, place, people, tags } = info;

  return <div className={styles['diary']}></div>;
};

export default DiaryListItem;
