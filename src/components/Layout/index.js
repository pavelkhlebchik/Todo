import React from 'react';

import s from './layout.module.css';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
    <div className={s.wrapper}>
      <h1 className={s.title}>todo
      <span className={s.title_accent}>list</span>
      </h1>
      {children}
    </div>
);

export default Layout;
