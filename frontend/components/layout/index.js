import React from 'react';

import NavComponent from 'components/nav';
import PageComponent from 'components/page';

import styles from './index.module.scss';

const Layout = ({ title, isNav = true, children }) => (
  <PageComponent title={title}>
    <div className={styles['global-wrapper']}>
      {isNav ? <NavComponent /> : null}
      {children}
    </div>
  </PageComponent>
);

export default Layout;
