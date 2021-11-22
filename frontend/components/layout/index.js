import React from 'react';

import NavComponent from 'components/nav';
import Helmet from 'components/hellmet';

import styles from './index.module.scss';

const Layout = ({ title, isNav = true, children }) => (
  <>
    <Helmet title={title} />
    <div className={styles['global-wrapper']}>
      {isNav ? <NavComponent /> : null}
      {children}
    </div>
  </>
);

export default Layout;
