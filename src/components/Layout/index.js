import React from 'react';
import List from '../List';

import s from './layout.module.css';

const Layout = () => (
    <div className={s.wrapper}>
      <h1 className={s.title}>todo
      <span className={s.title_accent}>list</span>
      </h1>
      <List />
    </div>
);

export default Layout;
