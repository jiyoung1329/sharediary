import React, { useEffect, useState } from 'react';
import Layout from 'components/layout';

import titleConfigs from 'configs/title';

import styles from './index.module.scss';

const diaryPage = () => {
  return (
    <Layout title={titleConfigs.createTitle}>
      <div className={styles['create-wrapper']}>hi</div>
    </Layout>
  );
};
export default diaryPage;
