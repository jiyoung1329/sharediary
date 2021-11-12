import styles from './index.module.scss';

const DiaryComponents = ({ info }) => {
  const { time, title, text, place, people, tags } = info;

  return <div className={styles['diary']}></div>;
};

export default DiaryComponents;
